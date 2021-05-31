import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
`;

export const TableContent = styled.table`
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
`;