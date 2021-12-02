import { Box } from '@mui/material'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import WelcomeSignedIn from './WelcomeSignedIn'





const Welcome = () => {
    const identity = useIdentityContext()
    console.log(identity)
    return (
        <>
         <Box >
        {!identity.provisionalUser && !identity.user && (
            <h1>Welcome {identity.user?.user_metadata?.full_name}!</h1>
        )}
      {identity.provisionalUser && !identity.user && (
          
          <h1>Thanks for signing up! Check your email to confirm.</h1>
      )}
    {identity.user && (
        <WelcomeSignedIn />
    )}
</Box>
   </>
   )

}

export default Welcome