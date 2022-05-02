import { styled } from "@mui/material/styles";
import { List } from "@mui/material";

export const StyledList = styled(List)`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
`;
