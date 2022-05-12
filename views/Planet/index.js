import { useState, useReducer } from "react";
import { useAtom } from "jotai";
import { Grid, Container } from "@mui/material";
import { planetAtom } from "../../store";
import Stats from "./Stats";
import Content from "./Content";
import ImagePlanet from "./Image";
import Buttons from "./Buttons";

export default function Planet() {
  // const tabs = ["overview", "structure", "surface"];
  const [planet] = useAtom(planetAtom);
  const [tabActive, setTabActive] = useState(0);

  const initialState = { ...planet.overview };
  function reducer(state, action) {
    switch (action.type) {
      case 1:
        return { ...planet.structure };
      case 2:
        return { ...planet.geology };
      default:
        return { ...planet.overview };
    }
  }

  const [stateContent, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <Buttons
        name={planet.name}
        tabActive={tabActive}
        setTabActive={setTabActive}
        dispatch={dispatch}
      />
      <Grid
        container
        rowSpacing={5}
        sx={{
          margin: "32px 0",
          padding: "0 32px",
          "& > *": { width: "100%" },
        }}
      >
        <Grid item sm={12}>
          <ImagePlanet image={planet.images.planet} name={planet.name} />
        </Grid>
        <Grid item sm={12}>
          <Content planetName={planet.name} stateContent={stateContent} />
        </Grid>
        <Grid item sm={12}>
          <Stats />
        </Grid>
      </Grid>
    </Container>
  );
}
