import { Box, Button, TextField } from '@mui/material'


const style = {
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    width: 400, 
    bgcolor: 'background.paper', 
    border: '2px solid #000', 
    boxShadow: 24, 
    p: 4,
  }


const SignUpForm = (props) => {




return (

    <Box sx={style}>
  <TextField>
   Email   
  </TextField>
  <TextField>
   Password   
  </TextField>
  <Button>Sign Up</Button>
  </Box>


)




}

export default SignUpForm; 