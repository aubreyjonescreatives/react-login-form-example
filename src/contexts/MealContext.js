import React, { createContext, useState, useEffect, useContext } from 'react'; 
import axios from 'axios'


const MealContext = createContext({


//categoryList: [],
mealList: [],
allMeals: [],


})



export const MealContextProvider = (props) => {
   // const [categoryList] = useState([])
    const [mealList, setMealList] = useState([])
    const [allMeals, setallMeals] = useState([])
   

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
        }}>
            {props.children}
        </MealContext.Provider>
    )
   



}

export const useMealContext = () => useContext(MealContext)