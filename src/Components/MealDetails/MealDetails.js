import React from 'react'; 
import { useParams } from 'react-router-dom'; 
import {useMealContext } from '../../contexts/MealContext';




const MealDetails = () => {
  const params = useParams()
  const meals = useMealContext()
 console.log(meals)

    const theMeal = meals.allMeals.find(item => item.id === params.idMeal )
    console.log(theMeal)

    return (
      <>
    <h1>${theMeal.strMeal} Info</h1>
      </>
  )
}

export default MealDetails; 