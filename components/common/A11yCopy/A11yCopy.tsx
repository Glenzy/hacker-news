import styled, { css } from 'styled-components';

export default styled.span.attrs({
  ariaHidden: true,
})<{ isHidden?: boolean }>`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  ${(props) =>
    props.isHidden &&
    css`
      display: none;
    `}
`;
