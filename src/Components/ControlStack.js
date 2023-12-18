import React from "react";
import ControlWidget from "./ControlWidget";
import {
  Box,
  Grid
} from "@mui/material";

// Existing infrastructure control.
const visualDisplayStatus = ['on', 'on', 'on', 'on', 'off', 'on', 'on', 'on'];
const audioDisplayStatus = ['on', 'off', 'on'];
const lightingSystemStatus = ['on', 'on', 'on', 'on', 'on', 'on'];

// Experimental: under research and development.
const visualTrackerStatus = ['on', 'on', 'off', 'on', 'on', 'on'];
const audioTrackerStatus = ['on', 'off', 'on', 'off', 'on', 'on'];
const selfAwarenessStatus = [];

const ControlStack = () => {
  return (
    <>
      <Box>
        <Grid container spacing={4}>
          <Grid item sm={12} md={6} lg={12} xl={6}>
            <ControlWidget
              title="Visual Display"
              statuses={visualDisplayStatus}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={12} xl={6}>
            <ControlWidget
              title="Visual Tracker"
              statuses={visualTrackerStatus}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={12} xl={6}>
            <ControlWidget
              title="Audio Display"
              statuses={audioDisplayStatus}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={12} xl={6}>
            <ControlWidget
              title="Audio Tracker"
              statuses={audioTrackerStatus}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={12} xl={6}>
            <ControlWidget
              title="Lighting System"
              statuses={lightingSystemStatus}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={12} xl={6}>
            <ControlWidget
              title="Self-Awareness"
              statuses={selfAwarenessStatus}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ControlStack;