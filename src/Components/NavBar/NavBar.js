import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'; 
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginForm from '../Login/LoginForm'; 
import SignUpForm from '../Login/SignUpForm'; 






const NavBar = () => {
const [open, setOpen] = useState(false)
const [openSignUp, setOpenSignUp] = useState(false)

const handleOpen = () => setOpen(true)
const handleClose = () => setOpen(false)


const handleOpenSignUp = () => setOpenSignUp(true)
const handleCloseSignUp = () => setOpenSignUp(false)



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
          <Button color="inherit" onClick={handleOpen}>Login</Button>
          <Button color="inherit" onClick={handleOpenSignUp}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
      </nav>
      <Modal open={open}>
      <LoginForm closeHandler={handleClose} />
      </Modal>

      <Modal open={openSignUp} onClose={handleCloseSignUp}>
      <SignUpForm />
      </Modal>
  </>
  );
}

export default NavBar;
