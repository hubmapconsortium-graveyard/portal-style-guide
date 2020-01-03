import React from 'react';
import Typography from '@material-ui/core/Typography';
import Hyperlink from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Palette from './Palette';
import Types from './Types';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Hyperlink color="inherit" href="https://hubmapconsortium.org">
        HuBMAP Consortium
      </Hyperlink>{' '}
      {new Date().getFullYear()}
      {'. All rights reserved.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    //marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function App() {

  return (
      <Router>
        <Switch>
          <Route path="/palette">
            <PaletteDemo />
          </Route>
          <Route path="/typography">
            <TypographyDemo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

function PaletteDemo() {
  const theme = useTheme();

  return (
    <Grid container>
      <Header />
      <Grid container>
      <Grid item sm={6} xs={6} style={{ padding: theme.spacing(5) }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Color Palette
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Light Variant
        </Typography>
        <Palette />
      </Grid>
      <Grid item sm={6} xs={6} style={{ padding: theme.spacing(5) }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Color Palette
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Dark Variant
        </Typography>
        <Palette />
      </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}

function TypographyDemo() {
  const theme = useTheme();

  return (
    <Grid container>
      <Header />
      <Grid item xs={12} style={{ padding: theme.spacing(5) }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Types
          </Typography>
        <Types />
      </Grid>
      <Footer />
    </Grid>
  );
}

function Home() {
  return (
    <Grid container>
      <Header />
      <Footer />
    </Grid>
  );
}

function Header() {
  const classes = useStyles();

  return (
    <AppBar style={{ margin: 0 }} position="sticky" elevation={1}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          HuBMAP Portal Style Guide
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/palette">Palette</Button>
        <Button color="inherit" component={Link} to="/typography">Typography</Button>
      </Toolbar>
    </AppBar>
  );
}

function Footer() {
  const theme = useTheme();

  return (
    <Grid item xs={12} style={{ padding: theme.spacing(5) }}>
      <Copyright />
    </Grid>
  );
}