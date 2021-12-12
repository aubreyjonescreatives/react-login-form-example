import React from 'react'; 
import SignUp from '../Login/SignUpForm'
import Login from '../Login/LoginForm'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'; 
import {useMealContext } from '../../contexts/MealContext';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import LandingBackground from '../../images/landingbackground.jpg'


const hboxStyle = {
  position: 'absolute', 
  top: '100px',
  textAlign: 'center', 
  width: '100%',
  fontSize: '24px'
 
}

const background = {
  clear: 'both', 
  display: 'block', 
  width: '100%',
  height: '800px'
  
}




// const tStyle = {
// maxWidth: '1200px',
// margin: '20px 170px', 
// fontSize: '23px', 
// }







const Landing = () => {


  const { mealList } = useMealContext()
 console.log(mealList.strMealThumb)
  const [value, setValue] = React.useState('1');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <>
    
    <Box> 
    
    
      <CardMedia 
      component="img"
      image={LandingBackground}
      sx={background}
     
      
      
      />
      



   <Box sx={hboxStyle}>
    <h1 >Welcome to the Latest and greatest Dash n' Dine meals!</h1>
    <h1 > Care to Login or Sign Up?</h1>
    </Box>
   
    <Box sx={{ width: '100%', typography: 'body1' }} >
      <TabContext value={value} >
        <Box sx={{ position: 'absolute', top: '200px', width: '100%' }} >
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Login" value="1" />
            <Tab label="Sign Up" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Login /></TabPanel>
        <TabPanel value="2"><SignUp /></TabPanel>
      </TabContext>
    </Box>


    </Box>
   
      </>
  )
}

export default Landing; 