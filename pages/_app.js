import Layout from "../components/Layout";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Layout>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
