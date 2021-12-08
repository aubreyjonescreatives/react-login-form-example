import React from 'react'; 
import SignUp from '../Login/SignUpForm'
import Login from '../Login/LoginForm'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'; 
import {useMealContext } from '../../contexts/MealContext';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';




const hboxStyle = {
  position: 'absolute', 
  top: '100px',
  textAlign: 'center', 
  width: '100%',
  fontSize: '24px'
 
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
     
      <Card sx={{ display: 'block', margin: '0 auto', height: '800px', width: '100%'}}>
      <CardMedia
        component="img"
        alt="Meal of the Day"
        image={`${mealList.strMealThumb}`}
      />
   
    </Card>

</Box>

   <Box sx={hboxStyle}>
    <h1 >Welcome to the Latest and greatest Dash n' Dine meals.</h1>
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



   
      </>
  )
}

export default Landing; 