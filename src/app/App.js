import React from 'react';
import Button from '@material-ui/core/Button';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import TypographyPage from './pages/typography/TypographyPage';
import PalettePage from './pages/palette/PalettePage';
import HomePage from './pages/home/HomePage';

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
