import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Dashboard from './Pages/Dashboard';
// import { theme } from "./Themes/theme";
import { createTheme } from "@mui/material";
import getDesignTokens from "./Themes/design-token";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App()
{
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
      () => ({
        // The dark mode switch would invoke this method
        toggleColorMode: () => {
          setMode((prevMode) =>
            prevMode === 'light' ? 'dark' : 'light',
          );
        },
      }),
      [],
    );
  
    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Dashboard theme={theme} colorMode={colorMode}/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}