import { createTheme } from "@mui/material";
import "@fontsource/inter";
import getDesignTokens from "./design-token";

const theme = createTheme(
  getDesignTokens(mode), [mode],
  {
    palette: {
      mode: "dark"
    },
    typography: {
      fontFamily: [
        'Inter',
        'Roboto',
        'Helvatica',
        'Verdana',
        'sans-serif'
      ].join(','),
    },
  }
)

export default theme;