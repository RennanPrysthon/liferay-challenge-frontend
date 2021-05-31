import styled from 'styled-components';

export const Container = styled.div`
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 

  & > div {
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 80%; 
  }

`;

export const Table = styled.table`

  border-collapse: collapse;
  width: 100%;

  & td, th {
    border: 1px solid #ddd;
    padding: 10px;
  }  

  & tr:nth-child(even){background-color: #f2f2f2;}

  & tr:hover {background-color: #ddd;}

  & th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4f97f1;
    color: white;
  }

`