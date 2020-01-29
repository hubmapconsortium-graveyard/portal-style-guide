import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

import Header from './Header';
import Footer from './Footer';

export default function HubmapPage(props) {
  const { headerLinks, children } = props;

  return (
    <Grid>
      <Header>{headerLinks}</Header>
      <Container maxWidth="lg">
        {children}
      </Container>
      <Footer />
    </Grid>
  );
}
