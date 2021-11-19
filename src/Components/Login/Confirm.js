import { useIdentityContext } from 'react-netlify-identity-gotrue'


const Confirm = () => {
    const identity = useIdentityContext()
    console.log(identity)
    return (
       
        <h1>Welcome, {identity.user?.user_metadata?.full_name}! Please Check Your Email to Confirm Your Account and Then Login.</h1>
       
    )
   

}

export default Confirm