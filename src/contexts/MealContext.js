import React, { createContext, useState, useEffect, useContext } from 'react'; 
import axios from 'axios'


const MealContext = createContext({


//categoryList: [],
mealList: [],
allMeals: [],
favoriteMeals: [], 


})



export const MealContextProvider = (props) => {
   // const [categoryList] = useState([])
    const [mealList, setMealList] = useState([])
   const [allMeals, setallMeals] = useState([])
    const [favoriteMeals, setfavoriteMeals] = useState([])






    const updateFavorites = (meal) => {

        if (!favoriteMeals.includes(meal.idMeal)) {
            setfavoriteMeals((prevState) => [ ...prevState, meal.idMeal]) 
           
            //   setFavoriteMeal((prevState) => [ ...prevState, <WelcomeSignedIn />]) 
            console.log(`The ${meal.strMeal} meal was added to your favorite Meals`)
        } else {
            setfavoriteMeals(() => {
                console.log(`The ${meal.strMeal} meal was removed from your favorite Meals`)
                return favoriteMeals.filter((item) => item !== meal.idMeal)
               
            })
        }
        }




    const fetchInfo = async () => {
        const mealsURL = `/.netlify/functions/infoData`
        try {
        const response = await axios.get(mealsURL)
        const latestMeals = await response.data.meals
        console.log(latestMeals)
       setMealList(latestMeals)
       setallMeals([...latestMeals])
        } catch (err) {
            console.log(err)
        }
    }
    
        useEffect(() => {
            fetchInfo()
        
    }, [])

 // call the function
    return (
        <MealContext.Provider value={{
        mealList,
        allMeals,
        favoriteMeals,
        updateFavorites, 
        }}>
            {props.children}
        </MealContext.Provider>
    )
   



}

export const useMealContext = () => useContext(MealContext)