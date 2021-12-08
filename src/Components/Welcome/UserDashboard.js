import * as React from 'react'; 
import { Box } from '@mui/material'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMealContext } from '../../contexts/MealContext';
import MealCard from '../MealCard/MealCard';

const style = {
   margin: '50px 10px', 
   fontSize: '36px'
  
  }

  const style2 = {
    margin: '50px 10px', 
    fontSize: '30px'
   
   }

   const typeStyle = {
    margin: '50px 10px', 
    fontSize: '26px'
   
   }



const Welcome = () => {
  const {mealList, favoriteMeals} = useMealContext()
  const [findFavorites, setfindFavorites] = React.useState([])

  React.useEffect(() => {
    setfindFavorites((prevState) => {
      const finds =  mealList.filter((meals) =>  favoriteMeals.includes(meals.id))
      console.log(finds)
      return [...prevState, finds]
    })
    
  }, [favoriteMeals, mealList])


console.log(findFavorites)

    const identity = useIdentityContext()
    console.log(identity)
    return (
        <>
         <Box sx={style}>
        <h1>Hi, {identity.user?.user_metadata?.full_name}</h1>
        </Box>
        <Box sx={style2}>
        <h1>What would you like to do?</h1>
</Box>
<Typography sx={typeStyle}>Favorited Meals</Typography>


<Box sx={{display: 'flex', justifyContent: 'center'}}>


{findFavorites.map((meal) => {
    return (

        
       
        <MealCard
        key={meal.idMeal}
        meal={{...meal}}
        // id={mCategories.id}
        // strCategoryThumb={mCategories.strCategoryThumb}
        // strCategory={mCategories.strCategory} 
        // strCategoryDescription={mCategories.strCategoryDescription}
        />
        
    )
    
})}
    </Box>



    <Typography sx={typeStyle}>Have You Tried These?</Typography>
<Box sx={{display: 'flex', justifyContent: 'center'}}>
<Card sx={{ maxWidth: 345, margin: '20px' }}>
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>




    <Typography sx={typeStyle}>Account Details</Typography>
<Box sx={{display: 'flex', justifyContent: 'center'}}>
<Card sx={{ maxWidth: 345, margin: '20px' }}>
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Account Settings
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Steps to take to recover account username, password, etc.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Account Privacy
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Learn more about account privacy and the extreme measures we take to make sure 
          your information is safe. 
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
   
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Account Payment History
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We thank you so much for being a Dine n Dash account user! Here hosts every 
          payment detail made to Dine n Dash.  
        </Typography>
      </CardContent>

    </Card>
    </Box>
















    
   </>
   )

}

export default Welcome