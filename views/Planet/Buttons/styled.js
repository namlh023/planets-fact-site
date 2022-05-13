import { ButtonGroup, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButtonGroup = styled(ButtonGroup)`
  color: ${({ theme }) => theme.palette.common.white};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const StyledButton = styled(Button)`
  font-size: 9px;
  line-height: 12px;
  font-weight: 700;
  font-family: "Spartan";
  letter-spacing: 1.92857px;
  text-transform: uppercase;
  padding: 16px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 75%;
  }
`;

export const StyledButton2 = styled(Button)`
  color: #fff;
  font-size: 9px;
  line-height: 25px;
  font-weight: 700;
  font-family: "Spartan";
  letter-spacing: 1.92857px;
  text-transform: uppercase;
  padding: 4px 4px 4px 24px;
  justify-content: flex-start;
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 300px;
`;
