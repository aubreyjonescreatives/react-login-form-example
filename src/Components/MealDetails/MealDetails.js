import * as React from 'react'; 
import { useParams } from 'react-router-dom'; 
import {useMealContext } from '../../contexts/MealContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const MealDetails = () => {
  const params = useParams()
  const meals = useMealContext()
  console.log(meals)

    const theMeal = meals.mealList.find(item => item.id === params.idMeal )
    console.log(theMeal)
    console.log(meals.mealList.idMeal)

    return (
      <>
  <Typography> Info</Typography>
      </>
  )
}

export default MealDetails; 