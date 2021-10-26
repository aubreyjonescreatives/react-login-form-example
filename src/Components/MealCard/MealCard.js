import * as React from 'react';
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const MealCard = (props) => {

  const [favorite, setFavorite] = React.useState(false)


  const handleFavoriteClick = () => {
  //  console.log(props.idCategory)
  console.log("Hello Favorite")
  setFavorite(!favorite)
  props.addFavoriteMealFunction(props.category)
  }
  

const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


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
<Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardHeader
        title={props.category.strCategory}
        sx={{ color: '#2A7221', width: "20%", fontsize: "6px"}}
      />
      <CardMedia
        component="img"
        height="194"
        image={`${props.category.strCategoryThumb}`}
        alt={props.category.strCategory}
        onError={handleImageLoadError}
      />
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
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        > {props.category.strCategory} Description
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
          {props.category.strCategoryDescription}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>



</>
)


}



export default MealCard