import { GetStaticProps } from 'next';
import fetch from 'isomorphic-unfetch';
import GlobalStyle from 'styles/GlobalStyles';
import { API_ENDPOINT } from 'utilities/constants';
import { getData } from 'utilities/mixins';
import Grid from 'components/common/Grid';
import Container from 'components/common/Container';
import GridItem from 'components/common/GridItem';
import Story from 'components/common/Story';

type StoryTypes = 'story' | 'comment' | 'job';

export interface StoryProps {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: StoryTypes;
  url: string;
}

const Main = ({ stories }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Grid>
          <ul>
            {stories.map((story, index) => {
              return (
                <GridItem key={index}>
                  <Story {...story} index={index} />
                </GridItem>
              );
            })}
          </ul>
        </Grid>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const storyIDs = await (await fetch(`${API_ENDPOINT}/topstories.json`)).json();
  storyIDs.length = 10;

  const stories: StoryProps[] = await Promise.all(storyIDs.map(async (id) => await getData(id)));

  const withComments = await Promise.all(
    stories.map(async (story) => {
      if (story.kids) {
        story.kids.length = Math.min(story.kids.length, 20);
        const comments = await Promise.all(story.kids.map(async (id) => await getData(id)));
        story.kids = [...comments];
        return story;
      } else {
        story;
      }
    })
  );

  return {
    props: {
      stories: withComments,
    },
  };
};

export default Main;
