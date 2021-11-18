import React, { createContext, useState, useEffect, useContext } from 'react'; 
import axios from 'axios'


const MealContext = createContext({


categoryList: [],
mealList: [],
allMeals: [],

})



export const MealContextProvider = (props) => {
    const [categoryList, setcategoryList] = useState([])
    const [mealList, setMealList] = useState([])
    const [allMeals, setallMeals] = useState([])


    const fetchInfo = async () => {
        const catURL = `/.netlify/functions/infoData?endpoint=categories`
        const mealURL = `/.netlify/functions/infoData?endpoint=filter`
        try {
        const catResponse = await axios.get(catURL)
        const mealCats = await catResponse.data.categories
        console.log(mealCats)
        const mealResponse = await axios.get(mealURL)
        const themealsList = await mealResponse.data.meals
        console.log(themealsList)
       setcategoryList(mealCats)
       setMealList({themealsList})
       setallMeals([...mealCats, ...themealsList])

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
        categoryList,
        mealList,
        allMeals, 
        }}>
            {props.children}
        </MealContext.Provider>
    )
   



}

export const useMealContext = () => useContext(MealContext)