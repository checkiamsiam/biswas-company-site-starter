import { ThemeProvider } from "@mui/material";
import Header from "../components/Header";
import "../styles/globals.css";
import theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
