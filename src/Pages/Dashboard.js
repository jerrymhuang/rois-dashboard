import './Dashboard.css';

import { Grid, Box, Divider } from '@mui/material';

import Header from '../components/Header';
import ControlStack from '../components/ControlStack';
import PlaceHolder from '../components/PlaceHolder';
import Footer from '../components/Footer';

const Dashboard = (props) => {
  const { theme, colorMode } = props;
  return (
    // <div className="App">
    <>
      <Header theme={theme} colorMode={colorMode} />
      <Divider />
      <Grid container spacing={4} justifyContent="center">
        <Box sx={{ height: '100%' }}>
          <Grid item sm={12} lg={5}>
            <ControlStack />
          </Grid>
          <Grid item sm={12} lg={7}>
            <PlaceHolder name="ModelViewer" />
          </Grid>
        </Box>
      </Grid>
      <Divider />
      <Footer />
    </>
    // </div>
  );
};

export default Dashboard;
