import * as React from "react";
import Link from "next/link";
import {
  Typography,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Drawer from "../Drawer";
import { StyledAppBar, StyledToolbar } from "./styled";
import { PLANETS } from "../../utils/contants";
import useHeight from "../../hooks/useHeight";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [component, heightOfComponent] = useHeight();

  const Menu = (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ height: "64px" }}
    >
      {PLANETS.map((planet) => {
        return (
          <Link key={planet.name} href={`/${planet.href}`} passHref>
            <Button
              component="a"
              sx={{
                borderRadius: "0",
                height: "100%",
                "&:hover": {
                  borderTop: `2px solid ${planet.color}`,
                },
              }}
            >
              <Typography variant="h4" color="common.white">
                {planet.name.toUpperCase()}
              </Typography>
            </Button>
          </Link>
        );
      })}
    </Stack>
  );

  return (
    <StyledAppBar position="static" ref={component}>
      <StyledToolbar>
        <Typography variant="h5">THE PLANETS</Typography>
        {isMobile ? <Drawer planets={PLANETS} top={heightOfComponent} /> : Menu}
      </StyledToolbar>
    </StyledAppBar>
  );
};
export default Header;
