import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  background-color: #4f97f1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 50px;
  font-size: 25px;
  cursor: pointer;
  transition: .2s;

  &:hover {
    background-color: #6da9f5;
  }
`;
