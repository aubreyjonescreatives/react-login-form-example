  
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MealContextProvider} from './contexts/MealContext';
import {Box, LinearProgress} from '@mui/material'; 
import NetlifyIdentityContext from 'react-netlify-identity-gotrue'
import NavBar from './Components/NavBar/NavBar';
//import Footer from './Components/Footer/Footer'; 
import Welcome from './Components/Welcome/Welcome';
import UserDashboard from './Components/Welcome/UserDashboard'; 
import FavoritesPage from './Components/FavoritesPage/FavoritesPage';
import Confirm from './Components/Login/Confirm'; 
import LandingPage from './Components/Landing/Landing'; 
import loginPage from './Components/Login/LoginForm'; 
import SignUpPage from './Components/Login/SignUpForm'; 
import PageNotFound from './Components/NotFound/NotFound.js'; 
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/mealsStyles.css'; 

const LatestMeals = React.lazy(() => import('./Components/LatestMeals/LatestMeals'));
const MealDetails = React.lazy(() => import('./Components/MealDetails/MealDetails'));


const style = {
 width: '100%'
}


const App = () => {
  return (
   <>
   <Router>
     <NetlifyIdentityContext url='https://recipes-react-front-end-app.netlify.app/'>
    <MealContextProvider>
     <NavBar />
  <Suspense fallback={<Box sx={style}>
  <LinearProgress />
    </Box>}>
  <Switch>
  <Route path="/" exact component={LandingPage} />
  <Route path="/Welcome" exact component={Welcome} />
  <Route path="/UserDashboard" exact component={UserDashboard} />
  <Route path="/Confirm" exact component={Confirm} />
  <Route path="/LatestMeals" exact component={LatestMeals} />
  <Route path="/FavoritesPage" exact component={FavoritesPage} />
  <Route path="/meals/:idMeal" exact component={MealDetails} />
  <Route path="/loginForm" exact component={loginPage} />
  <Route path="/SignUpForm" exact component={SignUpPage} />
  <Route path="*" exact component={PageNotFound} />
  </Switch>
  </Suspense>
   </MealContextProvider>
   </NetlifyIdentityContext>
   </Router>
   </>
  );
}

export default App;
