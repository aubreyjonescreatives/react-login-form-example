import React, { createContext, useState, useEffect, useContext } from 'react'; 
import axios from 'axios'


const MealContext = createContext({

meals: [],
mealList: [],


})



export const MealContextProvider = (props) => {
    const [meals] = useState([])
    const [mealList, setmealList] = useState([])




    const fetchCategories = async () => {
        const mealsURL = `/.netlify/functions/mealData`
        try {
        const response = await axios.get(mealsURL)
        const mealCats = await response.data.categories
       // console.log(response.data.categories)
       setmealList(mealCats)
       
        } catch (err) {
            console.log(err)
        }
    }
    
        useEffect(() => {
            fetchCategories()
        
    }, [])

 // call the function
    return (
        <MealContext.Provider value={{
        meals, 
        mealList,
        }}>
            {props.children}
        </MealContext.Provider>
    )
   



}

export const useMealContext = () => useContext(MealContext)