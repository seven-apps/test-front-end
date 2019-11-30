import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 0;
  height: 100%;
  background: linear-gradient(-90deg, #ffcda5, #ee4d5f);
`;

export const Content = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

export const Title = styled.h1`
  align-self: center;
  font-size: 30px;
  color: #fff;
  margin-bottom: 15px;
`;

export const Header = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      color: #fff;
      font-weight: bold;
      font-size: 16px;
    }

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid #fff;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;

export const UserContainer = styled.div`
  border: 1px solid #fff;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
