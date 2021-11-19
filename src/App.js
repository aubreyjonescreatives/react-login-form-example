  
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MealContextProvider} from './contexts/MealContext';
import {Box, LinearProgress} from '@mui/material'; 
import NetlifyIdentityContext from 'react-netlify-identity-gotrue'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'; 
import loginPage from './Components/Login/LoginForm'; 
import SignUpPage from './Components/Login/SignUpForm'; 
import PageNotFound from './Components/NotFound/NotFound.js'; 
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/mealsStyles.css'; 

const LatestMeals = React.lazy(() => import('./Components/LatestMeals/LatestMeals'));
const MealFavorites = React.lazy(() => import('./Components/MealFavorites/MealFavorites'));
const MealDetails = React.lazy(() => import('./Components/MealDetails/MealDetails'));


const style = {
 width: '100%'
}


const App = () => {
  return (
   <>
   <Router>
     <NetlifyIdentityContext url='https://fourth-course-project.netlify.app'>
    <MealContextProvider>
     <NavBar />
  <Suspense fallback={<Box sx={style}>
  <LinearProgress />
    </Box>}>
  <Switch>
  <Route path="/" exact component={LatestMeals} />
  <Route path="/MealFavorites" exact component={MealFavorites} />
  <Route path="/theMeal/:idMeal" exact component={MealDetails} />
  <Route path="/loginForm" exact component={loginPage} />
  <Route path="/SignUpForm" exact component={SignUpPage} />
  <Route path="*" exact component={PageNotFound} />
  </Switch>
  </Suspense>
   <Footer />
   </MealContextProvider>
   </NetlifyIdentityContext>
   </Router>
   </>
  );
}

export default App;
