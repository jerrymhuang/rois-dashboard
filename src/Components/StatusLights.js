import React from "react";
import { Box, Typography } from "@mui/material";

import CircleIcon from '@mui/icons-material/Circle';


const StatusLights = (props) => {
  const { statuses } = props;
  return (
    <>
      <Box sx={{ pl: '8px', pr: '8px' }}>
        {statuses.map((status, index) => (
          <Box sx={{ float: 'left', flexGrow: 0, p: '2px'}}>
            <Typography variant='caption'>{index + 1}</Typography>
            <CircleIcon 
              fontSize="small"
              color={status === 'on' ? 'secondary' : 'error'} 
            />
          </Box>
        ))}
      </Box>
    </>
  )
}

export default StatusLights;