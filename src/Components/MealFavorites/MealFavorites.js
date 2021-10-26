import React, { useState } from 'react'; 
// import theCategories from '../../data/meals.json'
//import MealCard from '../MealCard/MealCard'
//import Box from '@mui/material/Box';
import Container from '@mui/material/Container';




const MealCategories = () => {


const [favoriteMeal] = useState()


// const mealCats = theCategories.categories




// const [mealData] = useState({
//     mealList: mealCats
// })

 

// Fetch API 
/* 
const fetchCategories = async () => {
    try {
    const mealCategoriesInfo = mealCats
    setMealData(mealCategoriesInfo.data)
    console.log(mealCategoriesInfo.data)
    } catch (err) {
        console.log(err)
    }
}

    useEffect(() => {
        fetchCategories()
    
}, [])
 */

return (
  <>
  
  
  <main>
  <h1 className="m-c-header">Favorite Meals</h1>
  
  
  
  <Container className="containerAll">
    
  {favoriteMeal.map((idCategory) => {
      return (
       <p>{idCategory}</p>
  
      )
      
  })}
 
  
  </Container>
  </main>
  
  </>
  )
  
  
  }
  

export default MealCategories 