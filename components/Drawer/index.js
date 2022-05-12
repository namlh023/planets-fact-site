import * as React from "react";
import Link from "next/link";
import {
  IconButton,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { StyledList } from "./styled";

export default function MyDrawer(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const listItem = (planet) => (
    <ListItem sx={{ padding: "16px" }} onClick={toggleDrawer(false)}>
      <ListItemIcon>
        <CircleIcon sx={{ color: planet.color }} />
      </ListItemIcon>
      <ListItemText
        primaryTypographyProps={{
          variant: "h6",
          color: "common.white",
        }}
        primary={planet.name.toUpperCase()}
      />
      <ArrowForwardIosIcon
        sx={{ color: "#fff", fontSize: "12px", opacity: 0.4 }}
      />
    </ListItem>
  );

  return (
    <>
      <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiBackdrop-root, & .MuiDrawer-paper": {
            top: `${props.top + 1}px`, // + 1 border height
          },
        }}
      >
        <StyledList>
          {props.planets.map((planet) => {
            return (
              <Box key={planet.name} sx={{ cursor: "pointer" }}>
                <Link href={`/${planet.href}`} passHref>
                  {listItem(planet)}
                </Link>
                <Divider variant="middle" />
              </Box>
            );
          })}
        </StyledList>
      </Drawer>
    </>
  );
}
