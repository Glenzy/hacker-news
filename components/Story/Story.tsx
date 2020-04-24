import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { API_Data } from 'pages/index';
import { List, Anchor, Number } from './Story.styles';

interface StoryComponent extends API_Data {
  index: number;
}

const Story = ({ by, comments, score, time, title, type, url, id, index }: StoryComponent) => {
  const [height, setHeight] = useState<number | string>(0);
  return (
    <List key={id}>
      <Anchor href={url}>
        <Number>{index + 1}</Number>
        <p>{title}</p>
        <button onClick={() => setHeight(height === 0 ? 'auto' : 0)}>
          {height === 0 ? 'Open' : 'Close'}
        </button>
        {comments && (
          <AnimateHeight height={height}>
            <p>Hello</p>
          </AnimateHeight>
        )}
      </Anchor>
    </List>
  );
};

export default Story;

/**              {comments.map((comment) => {
            return (
              <div>
                <p>By: {comment.by}</p>
                <p>{comment.text}</p>
              </div>
            );
          })} */
