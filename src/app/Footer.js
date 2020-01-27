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

import { useStyles } from './styles';

export default function Footer() {
  const theme = useTheme();
  return (
    <Grid item xs={12} style={{ padding: theme.spacing(2) }}>
      <Copyright />
    </Grid>
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
