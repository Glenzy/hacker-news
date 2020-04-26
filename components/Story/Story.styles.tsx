import styled from 'styled-components';

export const List = styled.li`
  list-style: none;
  margin-bottom: 2rem;
`;

export const Anchor = styled.a.attrs({ target: '_blank', rel: 'noopener noreferrer' })`
  text-decoration: none;
  color: #333;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: start;
  &:hover {
    color: #999;
  }
  &:visited {
    color: lightgray;
  }
`;

export const Number = styled.p`
  margin-right: 1.5rem;
  padding-right: 0.5rem;
  color: #666;
  text-align: center;
  border-right: 0.1rem solid #666;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  @media screen and (min-width: 992px) {
    font-size: 1.7rem;
  }
`;
