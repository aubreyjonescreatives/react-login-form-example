import React from 'react'; 
import SignUp from '../Login/SignUpForm'
import Login from '../Login/LoginForm'
import { Box } from '@mui/material'
import {useMealContext } from '../../contexts/MealContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const mainStyle = {
  maxWidth: '1200px',
  display: 'block',
  margin: '0 auto',
}


const hStyle = {
  position: 'absolute', 
  top: '5px', 
  clear: 'both',
  maxWidth: '1200px',  
  margin: '100px auto', 
  fontSize: '25px',
  lineHeight: '100px',  
  left: '30%', 
  textAlign: 'center', 
  color: '#666'
  
}

const tStyle = {
maxWidth: '1200px',
margin: '20px 170px', 
fontSize: '23px', 
}


const cStyle = {
maxWidth: '1200px', 
display: 'block', 
margin: '0px auto', 
}






const Landing = () => {


  const meals = useMealContext()
 console.log(meals.allMeals)
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <>
      <Box sx={mainStyle}>
        <Box sx={{cStyle}}> 
     
      <Card sx={{ display: 'block', margin: '0 auto', height: '800px'}}>
      <CardMedia
        component="img"
        image={`${meals.mealList.strMealThumb}`}
        alt="Meal of the Day"
      />
   
    </Card>

</Box>

   <Box sx={hStyle}>
    <h1 >Welcome to the Latest and greatest Dash n' Dine meals.</h1>
    <h1 > Care to Sign Up or Login?</h1>
    </Box>
   
    <Box sx={{ width: '100%', typography: 'body1' }} >
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider', position: 'absolute', top: '200px', left: '43%' }} >
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Sign Up" value="1" />
            <Tab label="Login" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><SignUp /></TabPanel>
        <TabPanel value="2"><Login /></TabPanel>
      </TabContext>
    </Box>



    </Box>
      </>
  )
}

export default Landing; 