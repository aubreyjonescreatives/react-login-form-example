import React from 'react';
import { NavLink } from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import LoginForm from '../Login/LoginForm'; 
//import SignUpForm from '../Login/SignUpForm'; 






const NavBar = () => {



  return (
  <>
  <nav id="navWrapper">
   
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>
          <NavLink to='/' variant="h2" component="div">
            The Fancy Chef
          </NavLink>
          </Typography>
            <NavLink to='/loginForm'>Login</NavLink>
          <NavLink to='/SignUpForm'>Sign Up</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
      </nav>
  </>
  );
}

export default NavBar;
