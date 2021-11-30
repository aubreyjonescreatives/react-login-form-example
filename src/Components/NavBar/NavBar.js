import React, { useState } from 'react'; 
import { NavLink, useHistory } from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'; 
import ListItemIcon from '@mui/material/ListItemIcon'; 
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useIdentityContext } from 'react-netlify-identity-gotrue'
 
const NavBar = () => {

 const identity = useIdentityContext()
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
  <Box sx={{width: 250}} role="presentation" className="drawerMenu">
    <List>
    <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <RestaurantIcon/>
        </ListItemIcon>
        <NavLink to="/" className="navlink-3">Dash n' Dine</NavLink>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <RestaurantIcon/>
        </ListItemIcon>
        <NavLink to="/Welcome" className="navlink-3">Welcome</NavLink>
      </ListItem>
      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <MenuBookIcon/>
        </ListItemIcon>
        <NavLink to="/LatestMeals" className="navlink-3">Latest Meals</NavLink>
      </ListItem>

      <ListItem button>
        <ListItemIcon sx={{color: "white"}}>
          <FavoriteIcon/>
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
      <AppBar position="static" className="appbar">
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
            Dash n' Dine
          </NavLink>
          </Typography>
          {!identity.user && (
          <NavLink to='/loginForm' className="navlink-2">Login</NavLink>
          )}
          {!identity.user && !identity.provisionalUser && (
          <NavLink to='/SignUpForm' className="navlink-2">Sign Up</NavLink>
          )}
           {identity.user && (
             <Button color='inherit' onClick={identity.logout}>Logout</Button>
           )}
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
