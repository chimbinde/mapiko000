import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#8e8e8e',
      main: 'rgb(0, 146, 255)',
      dark: 'rgb(0, 153, 204)',
      contrastText: 'white',
    },
    secondary: {
      light: '#ffad42',
      main: '#f57c00',
      dark: '#bb4d00',
      contrastText: '#fffde7',
    },
      openTitle: '#455a64',
      protectedTitle: '#f57c00',
      type: 'light'
    }
  })

  export default theme