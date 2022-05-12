import { Typography } from "@mui/material";
import { StyledStat } from "./styled";

export default function Stat({ name, value }) {
  return (
    <StyledStat
      direction={{ xs: "row", sm: "column" }}
      justifyContent="space-between"
      alignItems={{ xs: "center", sm: "flex-start" }}
      flexGrow={1}
      spacing={1}
    >
      <Typography color="stat.secondary" variant="stat1">
        {name}
      </Typography>
      <Typography color="stat.main" variant="stat2">
        {value}
      </Typography>
    </StyledStat>
  );
}
