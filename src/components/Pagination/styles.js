import styled from 'styled-components';

export const Pages = styled.ul`
  margin-top: 100px;
  display: flex;

  li {
    :nth-of-type(1n + 10) {
      display: none;
    }
  }
`;
