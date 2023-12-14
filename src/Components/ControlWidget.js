import React from "react";
import {
    Card,
    Paper,
    Divider,
    IconButton,
    Typography,
    CardHeader,
    CardActions,
    Collapse,
} from "@mui/material";
import { styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NorthEastIcon from '@mui/icons-material/NorthEast';

import ControlSwitch from "./ControlSwitch";
import StatusLights from "./StatusLights";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));


const ControlWidget = (props) => {
  const { title, statuses } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card 
        variant="outlined" 
        sx={{
          background: 'none',
          border: 'none',
          height: '22.5vh'
        }}
      >
        <CardHeader
          title={
            <>
              <Typography 
                variant="subtitle1"
                sx={{
                  textAlign: 'left',
                  lineHeight: 1.2,
                  fontSize: '16px',
                  fontWeight: 'bold',
                  flexGrow: 1
                }}
              >
                {title}
              </Typography>
            </>
          }
          action={
            <>
              <ControlSwitch />
              <IconButton  
              aria-label="expand" 
              color="primary" 
              sx={{
                flexGrow: 0,
                xs: 'none',
                }}
              >
                <NorthEastIcon fontSize="small"/>
              </IconButton>
            </>
          }
          sx={{
            pl: '12px', pr: '12px',
            pt: '8px', pb: '8px'
          }}
        />
        <Divider sx={{ pl: '20px'}}/>
        <CardActions disableSpacing
        sx={{ padding: '4px'}} 
        >
          <Typography 
            variant="button"
            sx={{
              pl: '8px'
            }}
          >
            Show status
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon fontSize="small" />
          </ExpandMore>
        </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <StatusLights statuses={statuses}/>
          </Collapse>
          <Paper elevation={0}>
            <Typography 
              variant="body2" 
              sx={{ 
                textAlign: 'left',
                padding: '15px',
                fontFamily: 'Roboto Mono',
                fontSize: '12px'
              }}
            >
              Lorem ipsum dolor sit amet, high-level message for troubleshooting. 
            </Typography>
          </Paper>
      </Card>
    </>
  );
}

export default ControlWidget;