import { purple } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core';

/**
 * Material UI Theme
 *
 * Theme customizations for this app that implement a unique
 * material look & feel.
 */
export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: purple[700],
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontWeight: 'bold',
      },
      contained: {
        borderRadius: 3,
        boxShadow: 'none',
      },
    },
  },
});
