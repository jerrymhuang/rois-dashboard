import React from 'react';
import { IconButton } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';


const DarkModeSwitch = (props) => {
    const {theme, colorMode} = props;
    return (
        <>
            <IconButton  
                onClick={colorMode.toggleColorMode} 
                color="inherit"
            >
            {
                theme.palette.mode === 'dark' ? 
                <Brightness7Icon /> : <Brightness4Icon />
            }
            </IconButton>
        </>
    )
}

export default DarkModeSwitch;