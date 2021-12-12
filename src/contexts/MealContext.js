import * as React from 'react'; 
import axios from 'axios'


const MealContext = React.createContext({


//categoryList: [],
mealList: [],
allMeals: [],
favorites: [], 


})



export const MealContextProvider = (props) => {
   // const [categoryList] = useState([])
    const [mealList, setMealList] = React.useState([])
   const [allMeals, setallMeals] = React.useState([])
    const [favorites, setFavorites] = React.useState([])






    const updateFavorites = (mealInfo) => {

        if (!favorites.includes(mealInfo.idMeal)) {
            setFavorites((prevState) => [ ...prevState, mealInfo.idMeal]) 
           
            //   setFavoriteMeal((prevState) => [ ...prevState, <WelcomeSignedIn />]) 
            console.log(`The ${mealInfo.strMeal} meal was added to your favorite Meals`)
        } else {
            setFavorites(() => {
                console.log(`The ${mealInfo.strMeal} meal was removed from your favorite Meals`)
                return favorites.filter((item) => item !== mealInfo.idMeal)
               
            })
        }
        }



React.useEffect(() => {
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
    

    fetchInfo()




}, [])



 // call the function
    return (
        <MealContext.Provider value={{
        mealList,
        allMeals,
        favorites,
        updateFavorites, 
        }}>
            {props.children}
        </MealContext.Provider>
    )
   



}

export const useMealContext = () => React.useContext(MealContext)