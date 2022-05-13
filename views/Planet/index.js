import { useState, useReducer } from "react";
import { useAtom } from "jotai";
import { Grid, Container, useTheme, useMediaQuery } from "@mui/material";
import { planetAtom } from "../../store";
import Stats from "./Stats";
import Content from "./Content";
import ImagePlanet from "./Image";
import Buttons, { Buttons2 } from "./Buttons";

export default function Planet() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [planet] = useAtom(planetAtom);
  const [tabActive, setTabActive] = useState(0);

  const initialState = { ...planet.overview, image: planet.images.planet };
  function reducer(state, action) {
    switch (action.type) {
      case 1:
        return { ...planet.structure, image: planet.images.internal };
      case 2:
        return { ...planet.geology, image: planet.images.planet };
      default:
        return { ...planet.overview, image: planet.images.planet };
    }
  }

  const [stateContent, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      {isMobile && (
        <Buttons
          name={planet.name}
          tabActive={tabActive}
          setTabActive={setTabActive}
          dispatch={dispatch}
        />
      )}
      <Grid
        container
        rowSpacing={5}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          margin: "32px 0",
          padding: "0 32px",
          "& > *": { width: "100%" },
        }}
      >
        <Grid item sm={12} lg={6}>
          <ImagePlanet image={stateContent.image} name={planet.name} />
        </Grid>
        <Grid
          container
          item
          sm={12}
          lg={6}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item sm={6} lg={12}>
            <Content planetName={planet.name} stateContent={stateContent} />
          </Grid>
          {!isMobile && (
            <Grid
              item
              sm={6}
              lg={12}
              sx={{ alignItems: "center", marginTop: { lg: "40px" } }}
            >
              <Buttons2
                name={planet.name}
                tabActive={tabActive}
                setTabActive={setTabActive}
                dispatch={dispatch}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
      <Stats />
    </Container>
  );
}
