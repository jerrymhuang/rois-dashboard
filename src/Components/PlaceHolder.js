import React from "react";

import { 
  Paper, Typography
 } from "@mui/material";

const PlaceHolder = (props) => {
  const { name } = props;

  return (
    <>
      <Paper 
        elevation={0} 
        sx={{
          background: 'none',
          display: {
            xs: 'none',
            md: 'flex',
          },
          height: "75vh",
          border: "2px dashed",
          borderRadius: "20px",
          justifyContent: "center"
        }}
      >
        <Typography variant="h6" sx={{
          alignSelf: "center",
        }}>{name} goes here. It is under development.</Typography>
      </Paper>
    </>
  );
}

export default PlaceHolder;