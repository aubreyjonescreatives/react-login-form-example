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




const Welcome = () => {
    const identity = useIdentityContext()
    console.log(identity)
    return (
        <>
         <Box sx={style}>
        {!identity.provisionalUser && !identity.user && (
            <h1>Welcome {identity.user?.user_metadata?.full_name}!</h1>
        )}
      {identity.provisionalUser && (
          <h1>Thanks for signing up! Check your email to confirm.</h1>
      )}
    {identity.user && (
        <h1>Welcome to my site {identity.user?.user_metadata?.full_name}</h1>
    )}
</Box>
   </>
   )

}

export default Welcome