import { useIdentityContext } from 'react-netlify-identity-gotrue'


const Welcome = () => {
    const identity = useIdentityContext()
    console.log(identity)
    return (
        identity.provisionalUser ? 
        <h1>Please Check Your Email to Confirm Your Account.</h1>
        : <h1>Welcome {identity.user?.user_metadata?.full_name}!</h1>
    )
   

}

export default Welcome