import { Stack, Typography, Link } from "@mui/material";

export default function Content({ planetName, stateContent }) {
  return (
    <Stack
      alignItems={{ xs: "center", sm: "flex-start" }}
      justifyContent={{ xs: "center", sm: "flex-start" }}
      spacing={1}
    >
      <Typography variant="h2" color="common.white">
        {planetName}
      </Typography>
      <Typography
        variant="body2"
        color="secondary"
        sx={{ textAlign: { xs: "center", sm: "start", maxWidth: "50ch" } }}
      >
        {stateContent.content}
      </Typography>
      <Typography color="secondary" sx={{ marginTop: "16px !important" }}>
        Source : <Link href={stateContent.source}>Wikipedia</Link>
      </Typography>
    </Stack>
  );
}
