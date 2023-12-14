import React from "react";
import {
    Box,
    Button,
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material";

import DarkModeSwitch from './DarkModeSwitch';
import CraiveIcon  from "./CraiveIcon";

const pages = [ 
    {
        'name': 'Apps',
        'link': 'https://samuelchabot.com/',
    },
    {
        'name': 'Docs',
        'link': "https://craive-lab.gitbook.io/craive-lab-production-manual-for-designers/"
    }
];

const Header = (props) => {
    const { theme, colorMode } = props;
    const [setAnchorElNav] = React.useState(null);
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
        <>
            <AppBar
                position='static'
                color="transparent"
                sx={{
                    background: 'none',
                    margin: 0,
                    padding: 0,
                    boxShadow: 'none'
                }}>
                    <Toolbar sx={{ background: 'none' }}>
                        <Box sx={{m: '12px', pt: '8px'}}>
                        <CraiveIcon />
                        </Box>
                        <Typography
                            variant='h5'
                            sx={{
                                flexGrow: 1,
                                fontWeight: 'bold',
                                textAlign: "start",
                                letterSpacing: '2px'
                            }}
                        >
                            DASHBOARD
                        </Typography>
                        <Box sx={{ 
                            float: 'end',
                            flexGrow: 0, 
                            display: { 
                                xs: 'none', 
                                md: 'flex' 
                                } 
                            }}>
                            {pages.map((page => {
                                const {name, link} = page;
                                return (
                                    <Button
                                        key={name}
                                        onClick={handleCloseNavMenu}
                                        href={link}
                                        sx={{ my: 2, display: 'block', margin: '5px' }}
                                    >
                                        {name}
                                    </Button>
                                )
                            }))}
                        </Box>
                        <Box sx={{flexGrow: 0}}>
                            <DarkModeSwitch
                                theme={theme}
                                colorMode={colorMode}
                            />
                        </Box>
                    </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;