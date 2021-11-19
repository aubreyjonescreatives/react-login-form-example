import React, { createContext, useState, useEffect, useContext } from 'react'; 
import axios from 'axios'


const MealContext = createContext({


//categoryList: [],
mealList: [],
allMeals: [],

})



export const MealContextProvider = (props) => {
   // const [categoryList] = useState([])
    const [mealList] = useState([])
    const [allMeals, setallMeals] = useState([])


    const fetchInfo = async () => {
        const mealsURL = `/.netlify/functions/infoData`
       // const mealURL = `/.netlify/functions/infoData`
        try {
        const response = await axios.get(mealsURL)
        const latestMeals = await response.data.meals
        console.log(latestMeals)
      //  const mealResponse = await axios.get(mealURL)
      //  const themealsList = await mealResponse.data.categories
      //  console.log(themealsList)
       setallMeals(latestMeals)
      // setMealList({themealsList})
      // setallMeals([...mealCats])

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
      //  categoryList,
        mealList,
        allMeals, 
        }}>
            {props.children}
        </MealContext.Provider>
    )
   



}

export const useMealContext = () => useContext(MealContext)