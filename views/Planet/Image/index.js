import { Stack } from "@mui/material";
import Image from "next/image";

export default function ImagePlanet({ image, name }) {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Image src={image} alt={name} width={111} height={111} />
    </Stack>
  );
}
