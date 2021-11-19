import { useIdentityContext } from 'react-netlify-identity-gotrue'


const Welcome = () => {
    const identity = useIdentityContext()
    console.log(identity)
    return (
      <h1>Welcome {identity.user?.user_metadata?.full_name}!</h1>
    )
   

}

export default Welcome