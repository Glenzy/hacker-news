import { useState } from 'react';
import { API_Data } from 'pages/index';
import { List, Anchor, Number, Title } from './Story.styles';
import Comments from 'components/Comments';
interface StoryComponent extends API_Data {
  index: number;
}

const Story = ({ by, comments, score, time, title, type, url, id, index }: StoryComponent) => {
  return (
    <List key={id}>
      <Anchor href={url}>
        <Number aria-hidden={true}>{index + 1}.</Number>
        <Title>{title}</Title>
      </Anchor>
      <Comments comments={comments} />
    </List>
  );
};

export default Story;
