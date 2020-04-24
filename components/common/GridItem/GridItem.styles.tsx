import { css } from 'styled-components';

const StyledGridItem = () => css`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  border: 1px #ccc solid;
  padding: 1.5rem;

  /**  Column Size */
  @media (min-width: 320px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;
export default StyledGridItem;
