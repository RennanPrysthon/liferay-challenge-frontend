import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: minmax(150px, 100%), 100%;
  
  & > div {
    padding: 20px;
  }

  & > div > header  {
    background-color: #4f97f1; 
    color: #fff;
    padding: 20px;
  }
`;



