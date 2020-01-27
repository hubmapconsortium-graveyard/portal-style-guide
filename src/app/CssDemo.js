import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';
import App from './App';
import PaletteDemo from './PaletteDemo';
import { Home } from './App';

export default function CssDemo() {
  const theme = useTheme();

  return (
    <Grid>
      <Header />
      <Container maxWidth="lg">

      <Grid item xs={12} style={{ padding: theme.spacing(2) }}>
        <Typography variant="h1" gutterBottom>
          CSS
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Raw CSS
        </Typography>
        <Typography variant="body1">
          When used outside React, copy and paste this css.
        </Typography>
      </Grid>

      <Grid container>
        <pre>
          {generateCss(theme)}
        </pre>
      </Grid>

      </Container>
      <Footer />
    </Grid>
  );
}

function generateCss(theme) {
  const sheets = new ServerStyleSheets();
  sheets.collect(<ThemeProvider theme={theme} ><Home /></ThemeProvider>);
  
  const css = sheets.toString();
  return css;
}
