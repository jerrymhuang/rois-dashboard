import React from 'react';
import ControlWidget from './ControlWidget';
import { Box, Grid } from '@mui/material';
import VisualDisplay from './VisualDisplay';
import AudioDisplay from './AudioDisplay';
import LightingSystem from './LightingSystem';

// Experimental: under research and development.
const visualTrackerStatus = ['on', 'on', 'off', 'on', 'on', 'on'];
const audioTrackerStatus = ['on', 'off', 'on', 'off', 'on', 'on'];
const selfAwarenessStatus = [];

const ControlStack = () => {
  return (
    <>
      <Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item sm={12} md={6} lg={12} xl={6}>
            <VisualDisplay />
          </Grid>
          <Grid item sm={12} md={6} lg={12} xl={6}>
            <ControlWidget title="Visual Tracker" statuses={visualTrackerStatus} />
          </Grid>
          <Grid item sm={12} md={6} lg={12} xl={6}>
            <AudioDisplay />
          </Grid>
          <Grid item sm={12} md={6} lg={12} xl={6}>
            <ControlWidget title="Audio Tracker" statuses={audioTrackerStatus} />
          </Grid>
          <Grid item sm={12} md={6} lg={12} xl={6}>
            <LightingSystem />
          </Grid>
          <Grid item sm={12} md={6} lg={12} xl={6}>
            <ControlWidget title="Self-Awareness" statuses={selfAwarenessStatus} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ControlStack;
