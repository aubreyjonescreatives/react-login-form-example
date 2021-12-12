import * as React from 'react';
import { useHistory } from 'react-router-dom'; 
import '../../data/meals.json'; 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import subImage from '../../images/foodimg.png'; 
import LazyLoad from 'react-lazyload'
import InfoIcon from '@mui/icons-material/Info';
import { useMealContext } from '../../contexts/MealContext';


const cardStyles = {
  width: 345, 
  margin: 2 


}


const MealCard = (props) => {

  
  const history = useHistory()
  
  const { meal } = props

// local
  const [favorite, setFavorite] = React.useState(false)
  

// global 
  const { favorites, updateFavorites } = useMealContext()
  

  


  const handleInfoClick = () => {
  history.push(`/meals/${meal.idMeal}`)
  

  }

  //global changed state

  const handleFavoriteClick = () => {

 updateFavorites(meal)
 console.log("Hello Favorite")
 
  }

// local changed state

  React.useEffect(() => {
 favorites.includes(meal.idMeal) ? setFavorite(true) : setFavorite(false)
 console.log(favorites)
  }, [meal.idMeal, favorites])
  


  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };


  const [shareMeal, setShareMeal] = React.useState(false); 


  const handleShareMealClick = () => {
    props.modalFunction()
  setShareMeal(!shareMeal)
  }


  const handleImageLoadError = (e) => {
    console.log(e.target.src)
    e.target.onerror = null
    e.target.src = subImage
  }



//const {strCategoryThumb, strCategory, strCategoryDescription, id} = props

return (
<>
<Card sx={ cardStyles } className="cardAnimations">
      <CardHeader
        title={props.meal.strMeal}
        sx={{ color: '#2A7221', width: "100%", fontSize: "6px"}}
        onClick={handleInfoClick}
      />
      <LazyLoad>
      <CardMedia
        component="img"
        height="194"
        image={`${props.meal.strMealThumb}`}
        alt={props.meal.strCategory}
        onError={handleImageLoadError}
        onClick={handleInfoClick}
      />
      </LazyLoad>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavoriteIcon 
          sx={{ color: favorite ? '#E71D36' : '#4C86A8'}}
          />
        </IconButton>
        <IconButton aria-label="share" onClick={handleShareMealClick}>
          <ShareIcon 
          sx={{ color: shareMeal ? '#E71D36' : '#4C86A8'}}
          />
        </IconButton>
     
    



      </CardActions>
    </Card>



</>
)


}



export default MealCard