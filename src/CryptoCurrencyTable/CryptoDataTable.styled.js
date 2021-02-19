//this is a styled component file for styling the table and other complimentary elements
//styled component is a library

import styled from "styled-components";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import { DataTable } from "primereact/datatable";

//added padding to the container div of the table
export const ContainerDiv = styled.div`
  padding: 2rem;
`;

//defined the height and width of the image displayed
export const StyledImg = styled.img`
  height: 50px;
  width: 50px;
`;

//to style the prime react data table
export const StyledTable = styled(DataTable)`
  &.p-datatable {
    border: solid 1px darkgrey;
    width: 80%;
    display: inline-block;
  }

  &.p-datatable .p-datatable-header {
    display: flex;
    justify-content: center;
    font-size: 24px;
    background: #d32f2f;
    color: #fff;
  }

  &.p-datatable .p-datatable-thead > tr > th {
    background: #fde798fa;
  }

  &.p-datatable .p-datatable-tbody > tr > td {
      padding-top: 7px;
      padding-bottom: 7px;
  }
`;

//to style the name column
export const StyledName = styled.div`
  width: fit-content;
  border-bottom: solid 1px;
  cursor: pointer;
`;
