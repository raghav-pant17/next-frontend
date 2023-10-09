import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const primary = {
  main: '#1976d2',
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: '#fff',
};

const Appbar = () => {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{textDecoration:'none', color:'white' }}>NEXT </Link>
          </Typography>
          <Link to="/login" style={{textDecoration:'none', color:'white', marginRight: 50, fontSize:'large'}}>
          <PersonOutlineIcon />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Appbar;
