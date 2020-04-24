import { css } from 'styled-components';
export const GridStyles = css`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-right: -1rem;
  margin-left: -1rem;
  > * {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  margin-top: -1rem;
  > * {
    margin-top: 1rem;
  }
  align-items: center;
  justify-content: center;
`;
