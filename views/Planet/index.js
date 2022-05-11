import { useAtom } from "jotai";
import { Box, Grid, Stack, Typography, Link } from "@mui/material";
import { StyledButtonGroup, StyledButton } from "./styled";
import Image from "next/image";
import { planetAtom } from "../../store";

export default function Planet() {
  const [planet] = useAtom(planetAtom);

  return (
    <Box>
      <StyledButtonGroup variant="string" aria-label="button group" fullWidth>
        <StyledButton>Overview</StyledButton>
        <StyledButton>Structure</StyledButton>
        <StyledButton>Surface</StyledButton>
      </StyledButtonGroup>
      <Grid container sx={{ margin: "32px 0" }}>
        <Grid item sm={12} sx={{ width: "100%", margin: "50px" }}>
          <Stack alignItems="center" justifyContent="center">
            <Image
              src={planet.images.planet}
              alt={planet.name}
              width={111}
              height={111}
            />
          </Stack>
        </Grid>
        <Grid item sm={12} sx={{ width: "100%", margin: "0 32px" }}>
          <Stack alignItems="center" justifyContent="center" spacing={1}>
            <Typography variant="h2" color="common.white">
              {planet.name}
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              sx={{ textAlign: "center" }}
            >
              {planet.overview.content}
            </Typography>
            <Typography color="secondary" sx={{ marginTop: "32px !important" }}>
              Source : <Link href={planet.overview.source}>Wikipedia</Link>
            </Typography>
          </Stack>
        </Grid>
        <Grid item sm={12}></Grid>
      </Grid>
    </Box>
  );
}
