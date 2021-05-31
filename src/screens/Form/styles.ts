import styled from 'styled-components';

export const Container = styled.form`
  
`;

export const Table = styled.table`

  & > tr {
    width: 100%;
  }

  & > tr > th {
    text-align: left;
    background-color: #4f97f1;
    color: #fff;
    padding: 10px 20px;
  }

  & > tr > td {
    width: 100%;
  }

  & > tr > td > input[type=text]{ 
    width: 100%;
    padding: 10px;
  }

  & > tr > td > input[type=checkbox]{ 
    padding: 20px;
    margin-left: 20px;
  }

  & select {
    color: #ffffff;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    user-select: none;
    background-color:  #4f97f1;

  }

  & tfoot {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    width: 100%;
  }
`

export const Submit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;

  
  & button {
    background-color:  #4f97f1;
    color: #fff;
    border: none;
    padding :10px 20px;
    cursor: pointer;
    transition: .2s;
  }
  & button:hover {
    background-color: #6da9f5;
  }
`