import styled from "styled-components";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import { Dialog } from "primereact/dialog";

export const StyledDialog = styled(Dialog)`
  &.p-dialog .p-dialog-content {
    text-align: left;
    padding-left: 2rem;
  }
`;
