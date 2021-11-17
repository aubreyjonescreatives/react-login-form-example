import React from 'react'; 
import { useParams } from 'react-router-dom'; 
import {useMealContext } from '../../contexts/MealContext';




const CategoryMealList = () => {
  const params = useParams()
  const meals = useMealContext()


    const theMeal = meals.mealList.find(item => item.id === params.strCategory )
    console.log(theMeal)

    return (
      <>
    <h1>${theMeal.strCategory} Meals</h1>
      </>
  )
}

export default CategoryMealList