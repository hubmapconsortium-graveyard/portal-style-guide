import React from 'react';
import Typography from '@material-ui/core/Typography';
import Hyperlink from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Palette from './Palette';
import Types from './Types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';
import hubmaplogo from './hubmap-person.svg';
import MessageBar from './MessageBar'
import { Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  hubmaptypeLight: {
    marginRight: "10px",
    fill: "#FFF",
    height: "20px"
  },
  hubmaptypeDark: {
    marginLeft: "5px",
    fill: theme.palette.primary.light,
    strokeWidth: "1px",
    height: "40px"
  }
}));


export default function App() {

  return (
    <Router basename="/">
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
  const classes = useStyles();

  return (
    <Grid>
      <Header />
      <Container maxWidth="lg">

      <Grid item xs={12} style={{ padding: theme.spacing(2) }}>
        <Typography variant="h1" gutterBottom>
          Palette
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Inspired by orginal HuBMAP logo art.
        </Typography>
        <Typography variant="body1">
          The colors used in the Material UI color theme for the HuBMAP Portal were inspired by the artwork of the HuBMAP logo designed by NIH.
        </Typography>
      </Grid>

      <Grid container>
        <Grid item sm={12} lg={12} style={{ padding: theme.spacing(2) }}>
          <Typography variant="h3" gutterBottom>
            Material Color Palette
          </Typography>
          <Paper style={{ padding: theme.spacing(2) }} width="100%">
            <Palette />
          </Paper>
        </Grid>
        <Grid item sm={12} lg={6}  style={{ padding: theme.spacing(2) }}>
          <Typography variant="h3" gutterBottom>
            HuBMAP Logo Artwork
          </Typography>
          <Typography variant="body1" gutterBottom>
            The original HubMAP logo artwork was traced and converted into a vector graphic. Due to the low resolution of the original artwork, some details have been lost in the conversion process.
          </Typography>
          <Paper style={{ padding: theme.spacing(2) }} align="center">
            <img src={hubmaplogo} height='400' alt="HuBMAP Type Logo" />
          </Paper>
        </Grid>
        <Grid item sm={12} lg={6}  style={{ padding: theme.spacing(2) }}>
          <Typography variant="h3" gutterBottom>
            Application to Controls
          </Typography>
          <Typography variant="body1" gutterBottom>
            Colors from the HuBMAP Portal palette can be applied to controls to be used in the interface.
          </Typography>
          <Paper style={{ padding: theme.spacing(2) }} align="center">
          <MessageBar
            variant="error"
            className={classes.margin}
            message="This is an error message!"
          />
          <MessageBar
            variant="warning"
            className={classes.margin}
            message="This is a warning message!"
          />
          <MessageBar
            variant="info"
            className={classes.margin}
            message="This is an information message!"
          />
          <MessageBar
            variant="success"
            className={classes.margin}
            message="This is a success message!"
          />
          </Paper>
        </Grid>

      </Grid>

      </Container>
      <Footer />
    </Grid>
  );
}

function TypographyDemo() {
  const theme = useTheme();

  return (
    <Grid>
      <Header />
      <Container maxWidth="lg">
      <Grid item xs={12} style={{ padding: theme.spacing(2) }}>
        <Typography variant="h1" gutterBottom>
          Typography
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Built around a powerful open source font.
        </Typography>
        <Typography variant="body1">
          The font family used for the HuBMAP Portal is <i>Inter</i> designed by Rasmus Andersson. <i>Inter</i> was developed specifically for digital displays and comes in <a href="https://rsms.me/inter/#weights">18 styles</a> with <a href="https://rsms.me/inter/#features">33 Open Type features</a>. <i>Inter</i> is open source and available on <a href="https://github.com/rsms/inter">GitHub</a>, <a href="https://www.npmjs.com/package/typeface-inter">NPM</a>, and the <a href="https://rsms.me/inter/">web</a>.
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ padding: theme.spacing(2) }}>
        <Typography variant="h3" gutterBottom>
          Material Font Styles
        </Typography>
        <Paper style={{ padding: theme.spacing(2) }}>
          <Types />
        </Paper>
      </Grid>
      </Container>
      <Footer />
    </Grid>
  );
}


function Home() {
  const theme = useTheme();

  return (
    <Grid>
      <Header />
      <Container maxWidth="lg">
        <Grid item xs={12} style={{ padding: theme.spacing(2) }}>
          <Typography variant="h1" gutterBottom>
            HuBMAP Portal Style Guide
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            A lightweigt style guide based on the Material Design Language.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The user interface for the HuBMAP Portal will be based on the <a href="https://material.io">Material</a> design system
            and implemented using the <a href="https://material-ui.com">Material UI</a> library of <a href="http://reactjs.org">React</a> components.
          </Typography>
          <Typography variant="body1">
            This style guide was developed to showcase key elements of the HuBMAP Portal theme designed for Material UI.
            Generally, developers should refer to Material and Material UI documentation for information about look and feel as well as functionality.
            This style guide will evolve along with the development of the HuBMAP Portal user interfaces.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} lg={12} style={{ padding: theme.spacing(2) }}>
              <Card>
                <CardActionArea>
                  <CardMedia image={hubmaplogo} component="img" height="100px" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      HuBMAP Consortium
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Members of the HuBMAP consortium are developing the tools to create an open, global atlas of the human body at the cellular level.
                      These tools and maps will be openly available, to accelerate understanding of the relationships between cell and
                      tissue organization and function and human health.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Hyperlink color="inherit" href="https://hubmapconsortium.org">
                      Learn More
                    </Hyperlink>
                  </Button>
                </CardActions>
              </Card>
          </Grid>

        <Grid container>
        <Grid item xs={12} sm={6} lg={6}  style={{ padding: theme.spacing(2) }}>
            <Typography variant="h2" gutterBottom>
              Development
            </Typography>
            <Typography variant="body1" gutterBottom>
              This style guide is implemented as a React app with Material UI and can be found on <a href="https://github.com/hubmapconsortium/portal-style-guide">GitHub</a> in the HuBMAP organization.
              Additions and revisions should be submitted as pull requests against that repository.
            </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}  style={{ padding: theme.spacing(2) }}>
            <Typography variant="h2" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body1" gutterBottom>
              The style guide is currently being maintained by the HuBMAP HIVE Tools Component at Harvard Medical School.<br/>
            </Typography>
            <Typography variant="body2" gutterBottom>
              PI: Nils Gehlenborg (<Hyperlink>nils@hms.harvard.edu</Hyperlink>).
            </Typography>
          </Grid>
        </Grid>
        </Container>
      <Footer/>
    </Grid>
  );
}

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
      <Toolbar>
        <HubmapType className={classes.hubmaptypeLight}/>
        <Typography variant="h5" className={classes.title}>
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/palette">Palette</Button>
        <Button color="inherit" component={Link} to="/typography">Typography</Button>
      </Toolbar>
      </Container>
    </AppBar>
  );
}


function HubmapType(props) {
  return (
    <svg viewBox="0 0 700 162" class={props.className}>
      <path d="M99.9,0.47v161.37H56.26V94.06H43.2v67.78H-0.44V0.47H43.2v57.71h13.06V0.47H99.9z M212.06,29.57v132.26h-42.6l0.73-10.99
        c-2.9,4.46-6.48,7.8-10.73,10.04c-4.25,2.23-9.14,3.34-14.67,3.34c-6.29,0-11.51-1.06-15.65-3.19c-4.15-2.13-7.2-4.95-9.17-8.47
        c-1.97-3.52-3.2-7.19-3.68-11.01c-0.48-3.82-0.73-11.41-0.73-22.77V29.57h41.88v90c0,10.3,0.33,16.41,0.98,18.34
        c0.66,1.93,2.44,2.89,5.34,2.89c3.11,0,4.96-1,5.55-2.99c0.59-1.99,0.88-8.41,0.88-19.24V29.57H212.06z M228.33,0.47h43.54
        c13.75,0,24.17,1.03,31.25,3.09c7.08,2.06,12.8,6.23,17.15,12.5c4.35,6.28,6.53,16.38,6.53,30.33c0,9.43-1.54,16-4.61,19.72
        c-3.08,3.72-9.14,6.57-18.19,8.57c10.09,2.19,16.93,5.83,20.53,10.92c3.59,5.09,5.39,12.88,5.39,23.39v14.96
        c0,10.91-1.3,18.98-3.89,24.23c-2.59,5.25-6.72,8.84-12.39,10.77c-5.67,1.93-17.28,2.89-34.83,2.89h-50.48V0.47z M271.97,28.08
        v35.88c1.87-0.07,3.32-0.1,4.35-0.1c4.28,0,7.01-1.01,8.19-3.04c1.17-2.03,1.76-7.82,1.76-17.39c0-5.05-0.48-8.59-1.45-10.61
        c-0.97-2.03-2.23-3.3-3.78-3.84C279.48,28.44,276.46,28.15,271.97,28.08z M271.97,89.08v45.15c6.15-0.2,10.07-1.13,11.77-2.79
        c1.69-1.66,2.54-5.75,2.54-12.26v-15.05c0-6.91-0.76-11.1-2.28-12.56C282.47,90.11,278.46,89.28,271.97,89.08z M480.22,0.47v161.37
        h-38.15L442.02,52.9l-15.19,108.94h-27.06L383.76,55.39l-0.05,106.45h-38.15V0.47h56.47c1.68,9.7,3.4,21.14,5.18,34.31l6.2,41.05
        l10.03-75.35H480.22z M573.17,0.47l24.96,161.37h-44.6l-2.34-29h-15.61l-2.62,29h-45.12L510.1,0.47H573.17z M550.04,104.23
        c-2.21-18.28-4.42-40.87-6.65-67.78c-4.45,30.9-7.24,53.49-8.38,67.78H550.04z M605.54,0.47h43.95c11.88,0,21.03,0.9,27.42,2.69
        c6.39,1.79,11.19,4.39,14.41,7.77s5.39,7.49,6.53,12.31c1.14,4.82,1.71,12.28,1.71,22.38v14.05c0,10.3-1.11,17.81-3.32,22.53
        c-2.21,4.72-6.27,8.34-12.18,10.86c-5.91,2.53-13.63,3.79-23.17,3.79h-11.71v64.99h-43.64V0.47z M649.18,28.08v41.06
        c1.24,0.07,2.31,0.1,3.21,0.1c4.01,0,6.79-0.95,8.34-2.84c1.55-1.89,2.33-5.83,2.33-11.81V41.34c0-5.52-0.9-9.1-2.7-10.76
        C658.58,28.91,654.84,28.08,649.18,28.08z"/>
    </svg>
  );
}

function Copyright() {

  return (
    <Grid>
      <Grid container justify="center">
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Hyperlink color="inherit" href="https://hubmapconsortium.org">
          Human BioMolecular Atlas Program (HuBMAP)
        </Hyperlink>{' '}
        {new Date().getFullYear()}
        {'. All rights reserved.'}
        </Typography>
      </Grid>
    </Grid>
  );
}


function Footer() {
  const theme = useTheme();

  return (
    <Grid item xs={12} style={{ padding: theme.spacing(2) }}>
      <Copyright />
    </Grid>
  );
}
