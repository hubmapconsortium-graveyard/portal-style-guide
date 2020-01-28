import React from 'react';
import Typography from '@material-ui/core/Typography';
import Hyperlink from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

import TypographyPage from './pages/typography/TypographyPage';
import PalettePage from './pages/palette/PalettePage';
import HomePage from './pages/home/HomePage';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  const headerLinks = [
      <Button color="inherit" component={Link} to="/" key="1">Home</Button>,
      <Button color="inherit" component={Link} to="/palette" key="2">Palette</Button>,
      <Button color="inherit" component={Link} to="/typography" key="3">Typography</Button>,
  ]

  return (
    <Router basename="/">
      <Switch>
        <Route path="/palette">
          <PalettePage headerLinks={headerLinks}/>
        </Route>
        <Route path="/typography">
          <TypographyPage headerLinks={headerLinks}/>
        </Route>
        <Route path="/">
          <HomePage headerLinks={headerLinks}/>
        </Route>
      </Switch>
    </Router>
  );
}
