const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light' ?
    {
      primary: {
        main: '#3eb1c8',
      },
      secondary: {
        main: '#05bad2'
      },
      error: {
        main: '#ec008c'
      },
      background: {
        default: '#dbdbdb',
        paper: '#05bad238'
      },
      text: {
        primary: '#3eb1c8'
      }
    }
    :
    {
      primary: {
        main: '#3eb1c8',
      },
      secondary: {
        main: '#007396',
      },
      error: {
        main: '#aa43aaaa'
      },
      background: {
        default: '#002a3a',
        paper: '#00739638'
      },
      text: {
        primary: '#3eb1c8',
      },
    }
    ),
  },
  typography: {
    fontFamily: [
        'Inter',
        'Roboto',
        'Helvatica',
        'Verdana',
        'sans-serif',
        'Roboto Mono'
    ].join(','), 
  },

});

export default getDesignTokens;