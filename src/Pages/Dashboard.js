import './Dashboard.css';

import { Grid, Box, Divider } from '@mui/material';

import Header from '../Components/Header';
import ControlStack from '../Components/ControlStack';
import PlaceHolder from '../Components/PlaceHolder';
import Footer from '../Components/Footer';


const Dashboard = (props) => {
  const { theme, colorMode } = props;
  return (
    <div className="App">
      <Header theme={theme} colorMode={colorMode} />
      <Divider />
      <Box sx={{margin: '36px', height: "100%"}}>
        <Grid container spacing={4}>
          <Grid item sm={12} lg={5}>
            <ControlStack />
          </Grid>
          <Grid item sm={12} lg={7}>
            <PlaceHolder name="ModelViewer" />
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Footer />
    </div>
  );
}


export default Dashboard;
