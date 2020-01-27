import React from 'react';
import Typography from '@material-ui/core/Typography';
import Hyperlink from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';

import Types from './Types';
import Header from './Header';
import Footer from './Footer';


export default function TypographyDemo() {
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
