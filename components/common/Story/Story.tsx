import React from 'react';
import { StoryProps } from 'pages/index';
import { List, Anchor, Number } from './Story.styles';

interface StoryComponent extends StoryProps {
  index: number;
}

const Story = ({ by, kids, score, time, title, type, url, id, index }: StoryComponent) => {
  return (
    <List key={id}>
      <Number>{index + 1}</Number>
      <Anchor href={url}>{title}</Anchor>
    </List>
  );
};

export default Story;
