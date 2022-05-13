import { ButtonGroup, Button } from "@mui/material";
import { StyledButtonGroup, StyledButton, StyledButton2 } from "./styled";

export default function Buttons({ name, tabActive, setTabActive, dispatch }) {
  return (
    <StyledButtonGroup variant="string" aria-label="button group" fullWidth>
      <StyledButton sx={styleObject(0)} onClick={() => handleClick(0)}>
        Overview
      </StyledButton>
      <StyledButton sx={styleObject(1)} onClick={() => handleClick(1)}>
        Structure
      </StyledButton>
      <StyledButton sx={styleObject(2)} onClick={() => handleClick(2)}>
        Surface
      </StyledButton>
    </StyledButtonGroup>
  );

  function handleClick(tab) {
    setTabActive(tab);
    dispatch({ type: tab });
  }

  function styleObject(tab) {
    return {
      "&:after": {
        backgroundColor:
          tabActive === tab ? `planet.${name.toLowerCase()}` : "transparent",
      },
    };
  }
}

export function Buttons2({ name, tabActive, setTabActive, dispatch }) {
  return (
    <ButtonGroup
      orientation="vertical"
      variant="contained"
      aria-label="button group"
      fullWidth
      sx={{ "& button + button": { marginTop: "16px" } }}
    >
      <StyledButton2 sx={styleObject(0)} onClick={() => handleClick(0)}>
        Overview
      </StyledButton2>
      <StyledButton2 sx={styleObject(1)} onClick={() => handleClick(1)}>
        Structure
      </StyledButton2>
      <StyledButton2 sx={styleObject(2)} onClick={() => handleClick(2)}>
        Surface
      </StyledButton2>
    </ButtonGroup>
  );

  function handleClick(tab) {
    setTabActive(tab);
    dispatch({ type: tab });
  }

  function styleObject(tab) {
    return {
      backgroundColor:
        tabActive === tab ? `planet.${name.toLowerCase()}` : "transparent",
    };
  }
}
