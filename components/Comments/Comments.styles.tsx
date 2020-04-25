import styled from 'styled-components';
import ButtonUnstyled from 'components/common/ButtonUnstyled';

export const Button = styled(ButtonUnstyled)`
  cursor: pointer;
  text-align: center;
  color: steelblue;
  border-bottom: 0.1rem #888 solid;
  max-width: 100%;
  margin-top: 1rem;
`;

export const Wrapper = styled.div`
  padding-left: 4rem;
`;

export const Comment = styled.li`
  list-style: none;
`;

export const Content = styled.div`
  white-space: pre-wrap;
  overflow: hidden;
  border-bottom: 0.1rem #888 solid;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 1.6rem;
  padding-left: 1rem;
  p {
    font-size: 1.6rem;
  }
`;

export const By = styled.p`
  font-weight: 700;
  color: #333;
`;
