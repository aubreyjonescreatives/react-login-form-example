import { useIdentityContext } from 'react-netlify-identity-gotrue'


const Welcome = () => {
    const identity = useIdentityContext()
    console.log(identity)
    return (
        <>
        {!identity.provisionalUser && !identity.user && (
            <h1>Welcome {identity.user?.user_metadata?.full_name}!</h1>
        )}
      {identiy.provisionalUser && (
          <h1>Thanks for signing up! Check your email to confirm.</h1>
      )}
    {identity.user && (
        <h1>Welcome to my site {identity.user?.user_metadata?.full_name}</h1>
    )}

   </>
   )

}

export default Welcome