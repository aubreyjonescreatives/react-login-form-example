import React, { useState } from 'react'; 
import { NavLink, useHistory } from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'; 
import ListItemIcon from '@mui/material/ListItemIcon'; 
//import ListItemText from '@mui/material/ListItemText';
import MailItem from '@mui/icons-material/Mail';




const NavBar = () => {

  // const history = useHistory()

  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  // const handleNavChoice = () => {
  //   history.push('/MealFavorites')
  //   toggleDrawer()
  //   console.log("Go to this route now...")
  // }

const drawerItemList = () => (
  <Box sx={{width: 250}} role="presentation">
    <List>
    <ListItem button>
        <ListItemIcon>
          <MailItem/>
        </ListItemIcon>
        <NavLink to="/" className="navlink-3">Dash n' Dish</NavLink>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <MailItem/>
        </ListItemIcon>
        <NavLink to="/MealFavorites" className="navlink-3">Favorited Meals</NavLink>
      </ListItem>
    </List>
  </Box>
)

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
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>
          <NavLink to='/' className="navlink-1">
            Dash n' Dish
          </NavLink>
          </Typography>
            <NavLink to='/loginForm' className="navlink-2">Login</NavLink>
          <NavLink to='/SignUpForm' className="navlink-2">Sign Up</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
      </nav>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      {drawerItemList()}
      </Drawer>
  </>
  );
}

export default NavBar;
