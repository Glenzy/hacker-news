import styled from 'styled-components';

export const List = styled.li`
  list-style: none;
`;

export const Anchor = styled.a`
  text-decoration: none;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`;

export const Number = styled.p`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  background-color: #333;
  color: #fff;
  margin-right: 1.5rem;
  border-radius: 50%;
  text-align: center;
`;
