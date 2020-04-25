import AnimateHeight from 'react-animate-height';
import { useState } from 'react';
import { Button, Wrapper, Comment, Content, By } from './Comments.styles';
import A11yCopy from 'components/common/A11yCopy';

const Comments = ({ comments }) => {
  const [height, setHeight] = useState<number | string>(0);
  return (
    <Wrapper>
      <Button onClick={() => setHeight(height === 0 ? 'auto' : 0)}>
        {height === 0 ? `comments (${comments.length})` : 'Close'}
        <A11yCopy>click to read comments</A11yCopy>
      </Button>
      <AnimateHeight height={height} role="region" id="comments" aria-live="polite">
        <ul>
          {comments.map(({ id, by, text }) => (
            <Comment key={id}>
              <By>
                <A11yCopy>Comment by </A11yCopy>
                {by}:{' '}
              </By>
              <Content dangerouslySetInnerHTML={{ __html: text }} />
            </Comment>
          ))}
        </ul>
      </AnimateHeight>
    </Wrapper>
  );
};

export default Comments;
