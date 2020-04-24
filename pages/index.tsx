import { GetStaticProps } from 'next';
import fetch from 'isomorphic-unfetch';
import { API_ENDPOINT } from 'utilities/constants';
import { getData } from 'utilities/mixins';

type StoryTypes = 'story' | 'comment' | 'job';

interface Story {
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
    <ul>
      {stories.map((story, index) => {
        return (
          <li key={index}>
            <b>{index}</b> {story.title + '  ' + story.kids.length}
          </li>
        );
      })}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const storyIDs = await (await fetch(`${API_ENDPOINT}/topstories.json`)).json();
  storyIDs.length = 10;

  const stories: Story[] = await Promise.all(storyIDs.map(async (id) => await getData(id)));

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
