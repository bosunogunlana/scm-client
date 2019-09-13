 const theme = {
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff',
    }
  },
  globalStyle: {
    typography: {
      useNextVariants: true
    },
    form: {
      textAlign: 'center'
    },
    image: {
      margin: '10px auto 5px auto' 
    },
    pageTitle: {
      margin: "5px auto 10px auto"
    },
    textField: {
      margin: "10px auto 5px auto"
    },
    button: {
      marginTop: 20,
      position: 'relative'
    },
    customError: {
      color: 'red',
      fontSize: '0.8em',
      marginTop: '5px'
    },
    progress: {
      position: 'absolute'
    },
    invicibleSep: {
      border: 'none',
      margin: 4
    },
    visibleSep: {
      width: '100%',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      marginBottom: 20
    },
    card: {
      display: 'flex',
      marginBottom: 20
    },
    cardContent: {
      width: '100%',
      flexDirection: 'column',
      padding: 25
    },
    cover: {
      minWidth: 200,
      objectFit: 'cover'
    },
    handle: {
      width: 60,
      height: 20,
      backgroundColor: '#008394',
      marginBottom: 7
    },
    date: {
      height: 14,
      width: 100,
      backgroundColor: 'rgba(0,0,0,0.3)',
      marginBottom: 10
    },
    fullLine: {
      height: 15,
      width: '90%',
      backgroundColor: 'rgba(0,0,0,0.6)',
      marginBottom: 10
    },
    halfLine: {
      height: 15,
      width: '50%',
      backgroundColor: 'rgba(0,0,0,0.6)',
      marginBottom: 10
    }

  }
};

export default theme;