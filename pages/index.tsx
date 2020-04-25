import { GetStaticProps } from 'next';
import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from 'utilities/constants';
import { getData } from 'utilities/mixins';
import Container from 'components/common/Container';
import Story from 'components/Story';
import Error from 'components/Error';
import UnorderedList from 'components/common/UnorderedList';

interface CommentProps {
  by: string;
  text: HTMLAllCollection;
}

export interface API_Data {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  comments: CommentProps[] | any[];
}

interface StoryProps {
  stories?: API_Data[];
  error?: string;
}

const Main = ({ stories, error }: StoryProps) => {
  if (error) return <Error error={error} />;
  return (
    <>
      <Container>
        <UnorderedList>
          {stories.map((story, index) => {
            return <Story {...story} index={index} key={index} />;
          })}
        </UnorderedList>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const storyIDs = await (await fetch(`${API_ENDPOINT}/topstories.json`)).json();
    storyIDs.length = 10;
    const stories: API_Data[] = await Promise.all(storyIDs.map(async (id) => await getData(id)));

    const withComments = await Promise.all(
      stories.map(async (story) => {
        if (story.kids) {
          story.kids.length = Math.min(story.kids.length, 20);
          const comments = await Promise.all(story.kids.map(async (id) => await getData(id)));
          story.comments = comments.length && [...comments];
          return story;
        } else {
          story.comments = [];
          return story;
        }
      })
    );

    return {
      props: {
        stories: withComments,
      },
    };
  } catch (error) {
    return {
      props: {
        error: 'Error loading stories',
      },
    };
  }
};

export default Main;
