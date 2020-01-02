import { createMuiTheme } from '@material-ui/core/styles';
import "typeface-inter"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#636363',
    },
    secondary: {
      main: '#444A65',
    },
    error: {
      main: '#DA348A',
    },
    warning: {
      main: '#D25435',
    },
    info: {
      main: '#3781D1',
    },
    success: {
      main: '#9BC551'
    },
    type: "light"
  },
  typography: {
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    h6: {
      fontWeight: 700
    },    
    h4: {
      fontWeight: 300
    },
    button: {
      fontWeight: 700,  
      textTransform: 'capitalize'
    }
  },
  shape: {
    borderRadius: 2
  }
});

export default theme;