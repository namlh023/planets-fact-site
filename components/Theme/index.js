import { createTheme } from "@mui/system";

export default function Theme() {
  return {
    palette: {
      common: {
        black: "#070724",
        white: "#FFFFFF",
      },
      primary: {
        main: "#38384F",
      },
      secondary: {
        main: "#838391",
      },
      planet: {
        mercury: "#419EBB",
        venus: "#EDA249",
        earth: "#6F2ED6",
        mars: "#D14C32",
        jupiter: "#D83A34",
        saturn: "#CD5120",
        uranus: "#1EC2A4",
        neptune: "#2D68F0",
      },
    },
    typography: {
      h1: {
        fontFamily: "'Antonio', sans-serif",
        fontWeight: "500",
        fontSize: "80px",
        lineHeight: "103px",
        letterSpacing: "0em",
      },
      h2: {
        fontFamily: "'Antonio', sans-serif",
        fontWeight: "500",
        fontSize: "40px",
        lineHeight: "52px",
        letterSpacing: "-1.5px",
      },
      h3: {
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: "700",
        fontSize: "12px",
        lineHeight: "25px",
        letterSpacing: "2.57143px",
      },
      h4: {
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: "700",
        fontSize: "11px",
        lineHeight: "25px",
        letterSpacing: "1px",
      },
      h5: {
        fontFamily: "'Antonio', sans-serif",
        fontWeight: "500",
        fontSize: "28px",
        lineHeight: "36px",
        letterSpacing: "-1.05px",
        textTransform: "uppercase",
      },
      body1: {
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "25px",
        letterSpacing: "0em",
      },
    },
  };
}
