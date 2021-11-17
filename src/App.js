  
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {MealContextProvider} from './contexts/MealContext'
import MealCategories from './Components/MealCategories/MealCategories';
import MealFavorites from './Components/MealFavorites/MealFavorites'; 
import CategoryMealList from './Components/CategoryMealList/CategoryMealList'; 
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'; 
import loginPage from './Components/Login/LoginForm'; 
import SignUpPage from './Components/Login/SignUpForm'; 
import PageNotFound from './Components/NotFound/NotFound.js'; 
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/mealsStyles.css'; 


const App = () => {
  return (
   <>
   <Router>
    <MealContextProvider>
     <NavBar />
  <Switch>
  <Route path="/" exact component={MealCategories} />
  <Route path="/MealFavorites" exact component={MealFavorites} />
  <Route path="/CategoryMealList" exact component={CategoryMealList} />
  <Route path="/loginForm" exact component={loginPage} />
  <Route path="/SignUpForm" exact component={SignUpPage} />
  <Route path="*" exact component={PageNotFound} />
  </Switch>
   <Footer />
   </MealContextProvider>
   </Router>
   </>
  );
}

export default App;
