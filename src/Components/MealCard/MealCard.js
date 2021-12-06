import * as React from 'react';
import { useHistory } from 'react-router-dom'; 
import '../../data/meals.json'; 
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import subImage from '../../images/foodimg.png'; 
import LazyLoad from 'react-lazyload'
import InfoIcon from '@mui/icons-material/Info';



const cardStyles = {
  width: 345, 
  margin: 2, 
//  transform: translate3D('0, -1px, 0') scale('1.03') 



}


const MealCard = (props) => {

  const [favorite, setFavorite] = React.useState(false)
  const history = useHistory()


  const handleInfoClick = () => {
  history.push(`/meals/${props.category.idMeal}`)

  }



  const handleFavoriteClick = () => {
  //  console.log(props.idCategory)
  console.log("Hello Favorite")
  setFavorite(!favorite)
  props.addFavoriteMealFunction(props.category)
  }
  


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
<Card sx={{ cardStyles }}>
      <CardHeader
        title={props.category.strMeal}
        sx={{ color: '#2A7221', width: "100%", fontsize: "6px"}}
      />
      <LazyLoad>
      <CardMedia
        component="img"
        height="194"
        image={`${props.category.strMealThumb}`}
        alt={props.category.strCategory}
        onError={handleImageLoadError}
      />
      </LazyLoad>
      <CardContent>
      </CardContent>
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
        <IconButton aria-label="share" onClick={handleInfoClick}>
          <InfoIcon 
          sx={{ color: shareMeal ? '#E71D36' : '#4C86A8'}}
          />
        </IconButton>
    



      </CardActions>
    </Card>



</>
)


}



export default MealCard