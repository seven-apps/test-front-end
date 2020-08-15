import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  svg {
    animation: ${rotate} 1.5s linear infinite;
  }
`;

export const ListContainer = styled.div`
  padding: 10px;
`;

export const Row = styled.div`
  border-bottom: 1px solid #ebeced;
  text-align: left;
  margin: 5px 0;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  padding: 10px;

  p {
    font-size: 20px;
    color: #fff;
    margin-bottom: 5px;
  }
`;
