import { Stack } from "@mui/material";
import Image from "next/image";

export default function ImagePlanet({ image, name }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ margin: { sm: "50px" } }}
    >
      <Image src={image} alt={name} width={250} height={250} />
    </Stack>
  );
}
