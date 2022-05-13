import { Stack } from "@mui/material";
import { useAtom } from "jotai";
import { planetAtom } from "../../../store";
import Stat from "./Stat";

export default function Stats() {
  const [planet] = useAtom(planetAtom);

  return (
    <Stack
      spacing={2}
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      sx={{ marginBottom: "32px", marginTop: { lg: "64px" } }}
    >
      <Stat name={"rotation"} value={planet.rotation} />
      <Stat name={"revolution"} value={planet.revolution} />
      <Stat name={"radius"} value={planet.radius} />
      <Stat name={"temperature"} value={planet.temperature} />
    </Stack>
  );
}
