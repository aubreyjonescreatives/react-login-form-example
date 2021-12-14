import * as React from 'react'; 
import { Box } from '@mui/material'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'; 
import { useMealContext } from '../../contexts/MealContext';
import MealCard from '../MealCard/MealCard';
import { Transition } from 'react-transition-group'; 
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';



const style = {
  margin: '50px 10px',
  fontSize: '36px', 
   
    
  }

  

   const typeStyle = {
    margin: '50px 10px', 
    fontSize: '26px'
   
   }

  


const FavoritesPage = () => {
 
 const [findFavorites, setfindFavorites] = React.useState([])
  const {allMeals, favorites} = useMealContext()

console.log(favorites)


  React.useEffect(() => {
    setfindFavorites((prevState) => {
      const finds = allMeals.filter((meal) => favorites.includes(meal.idMeal))
      console.log(finds)
      return [...prevState, ...finds]
    })
    
  }, [favorites, allMeals])



    const identity = useIdentityContext()
    console.log(identity)


    return (
        <>
        <Box className="landingPage">
         <Box sx={style}>
        <h1>Hi, {identity.user?.user_metadata?.full_name}, How's Life?</h1>
        </Box>
       
<Typography sx={typeStyle}>Favorited Meals</Typography>


<Box sx={{display: 'flex', justifyContent: 'center'}}>


{findFavorites.map((meal) => {
    return (

        
       
        <MealCard
        key={meal.idMeal}
        meal={{...meal}}
      
        />
        
    )
    
})}
    </Box>





    </Box>

  

    
   </>
   )

}

export default FavoritesPage