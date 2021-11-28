import { Box } from '@mui/material'
import { useIdentityContext } from 'react-netlify-identity-gotrue'




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




const Confirm = () => {
    const identity = useIdentityContext()
    console.log(identity)
    return (
      <Box sx={style}>
        <h1>Welcome, {identity.user?.user_metadata?.full_name}! Please Check Your Email to Confirm Your Account and Then Login.</h1>
        </Box> 
    )
   

}

export default Confirm