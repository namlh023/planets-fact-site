import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  [theme.breakpoints.between("sm", "md")]: {
    justifyContent: "center",
    flexDirection: "column",
    gap: "16px",
    padding: "10px",
  },
}));
