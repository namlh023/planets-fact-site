import { Stack, Typography, Link } from "@mui/material";

export default function Content({ planetName, stateContent }) {
  return (
    <Stack alignItems="center" justifyContent="center" spacing={1}>
      <Typography variant="h2" color="common.white">
        {planetName}
      </Typography>
      <Typography
        variant="body2"
        color="secondary"
        sx={{ textAlign: "center" }}
      >
        {stateContent.content}
      </Typography>
      <Typography color="secondary" sx={{ marginTop: "32px !important" }}>
        Source : <Link href={stateContent.source}>Wikipedia</Link>
      </Typography>
    </Stack>
  );
}
