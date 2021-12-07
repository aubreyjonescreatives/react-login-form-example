import * as React from 'react'; 
import { useParams } from 'react-router-dom'; 
import {useMealContext } from '../../contexts/MealContext';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';


const background = {

}


const styles = {
display: 'flex', 
justifyContent: 'center', 
margin: '100px auto', 

}


const cardStyles = {
  width: '80%',
 
  
  }


  const cardheaderStyles = {
    backgroundColor: '#666', 
    color: 'white',
    
    
    }


const ingredientStyles = {
padding: '0px 5px',
textAlign: 'center', 
marginTop: '5px', 
flexWrap: 'wrap', 
  }


  const cardsubheaderStyles = {
  padding: '0px 15px', 
  fontSize: '20px',
  }

  const ccStyles = {
    display: 'flex',
    marginTop: '10px', 
    height: '150px',
  }

  const mealInstructionStyles = {
   marginTop: '5px',
  }


const MealDetails = () => {
  const params = useParams()
  const  mealData = useMealContext()
  console.log(mealData)
  console.log(mealData.allMeals)

    const theMeal = mealData.allMeals.find(item => item.id === params.mealId )
    console.log(theMeal)
  

    return (
      <>
    <Box sx={styles}>
  <Card sx={cardStyles}>
  <CardHeader sx={cardheaderStyles}
  title={theMeal.strMeal}
  >
  </CardHeader>
  <CardContent sx={ccStyles}>
  <Typography sx={cardsubheaderStyles}>Meal Ingredients: </Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure1} {theMeal.strIngredient1}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure2} {theMeal.strIngredient2}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure3} {theMeal.strIngredient3}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure4} {theMeal.strIngredient4}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure5} {theMeal.strIngredient5}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure6} {theMeal.strIngredient6}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure7} {theMeal.strIngredient7}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure8} {theMeal.strIngredient8}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure9} {theMeal.strIngredient9}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure10} {theMeal.strIngredient10}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure11} {theMeal.strIngredient11}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure12} {theMeal.strIngredient12}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure13} {theMeal.strIngredient13}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure14} {theMeal.strIngredient14}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure15} {theMeal.strIngredient15}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure16} {theMeal.strIngredient16}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure17} {theMeal.strIngredient17}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure18} {theMeal.strIngredient18}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure19} {theMeal.strIngredient19}</Typography>
 <Typography sx={ingredientStyles}> {theMeal.strMeasure20} {theMeal.strIngredient20}</Typography>
 </CardContent>
 <CardContent sx={ccStyles}>
 
  <Typography sx={cardsubheaderStyles} >Instructions: </Typography>
  <Typography sx={mealInstructionStyles}>{theMeal.strInstructions} </Typography>
  </CardContent>

  <CardActions sx={{display: 'flex', justifyContent: 'center', backgroundColor: '#5FAD56'}} disableSpacing>
  <Typography >For a Full YouTube Tutorial, Click on this YouTube Icon:</Typography>
  <Link href={theMeal.strYoutube}> 
  <IconButton>
          <YouTubeIcon 
         sx={{fontSize: '60px', color: 'white'}} 
          />
        </IconButton>
        </Link>
</CardActions>

</Card>

  

  </Box>

<Typography></Typography>

      </>
  )
}

export default MealDetails; 