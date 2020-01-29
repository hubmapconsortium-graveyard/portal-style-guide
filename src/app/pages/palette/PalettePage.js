import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';

import Palette from './Palette';
import MessageBar from '../../MessageBar';
import hubmaplogo from '../../hubmap-person.svg';
import { useStyles } from '../../styles';
import HubmapPage from '../template/TemplatePage';

export default function PalettePage(props) {
  const { headerLinks } = props;
  const theme = useTheme();
  const classes = useStyles();

  return (
    <HubmapPage headerLinks={headerLinks}>
      <Grid item xs={12} style={{ padding: theme.spacing(2) }}>
        <Typography variant="h1" gutterBottom>
          Palette
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Inspired by orginal HuBMAP logo art
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
            Colors from the HuBMAP Portal palette can be applied to alert boxes.
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
    </HubmapPage>
  );
}
