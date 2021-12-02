import { Box, Button, TextField, FormHelperText } from '@mui/material'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import { useIdentityContext } from 'react-netlify-identity-gotrue'

const style = {
    position: 'absolute', 
    top: '65%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    width: 400, 
    bgcolor: 'background.paper', 
    border: '1px solid #ccc', 
    boxShadow: 6, 
    p: 4,
  }


const SignUpForm = (props) => {

//const {closeHandler} = props

const identity = useIdentityContext()
const history = useHistory()

const handleClose = () => {
  history.push('/Confirm')
  console.log("Should close now...")

}
return (

    <Box sx={style}>
    <Formik 
    initialValues={{
        username: "Aubrey Jones",
        email: "example@example.com", 
        password: "Pass123", 

    }}
    validationSchema={
        Yup.object().shape({
          username: Yup.string()
          .min(4)
          .required('Username is required.'),
            email: Yup.string()
            .email('Must be a valid email.')
            .max(255)
            .required('Email is required.'),
            password: Yup.string()
            .min(6, 'Must include at least 6 characters.')
            .max(25, 'We KNOW your password isn' + 't more than 25 characters long.')
            .required('A password is required.'),
        })}
    onSubmit={ async (value, {setErrors, setStatus, setSubmitting}) => {
    try {
       
        setStatus({success: true})
        setSubmitting(false)
        await identity.signup({
          email: value.email, password: value.password, user_metadata: {
            full_name: value.username
          }
        }).then(() => {
          handleClose()
          console.log('Submit Successful!')
        })
    } catch (err) {
        console.error(err)
        setStatus({success: false})
        setErrors({ submit: err.message })
        setSubmitting(false)
    } 
    }}
    >
    {({errors, 
        values, 
        handleSubmit, 
        handleBlur, 
        handleChange, 
        isSubmitting, 
        touched,
        }) => (
<form noValidate onSubmit={handleSubmit}>

  <TextField
  error={Boolean(touched.username && errors.username)}
  fullWidth
  helperText={touched.username && errors.username}
  label="Username"
  margin="normal" 
  name="username"
  type="text"
  variant="outlined"
  onBlur={handleBlur}
  onChange={handleChange}
  value={values.username}
  
  />
  <TextField
  error={Boolean(touched.email && errors.email)}
  fullWidth
  helperText={touched.email && errors.email}
  label="Email"
  margin="normal" 
  name="email"
  type="email"
  variant="outlined"
  onBlur={handleBlur}
  onChange={handleChange}
  value={values.email}
  
  />
  <TextField
  error={Boolean(touched.password && errors.password)}
   fullWidth
   helperText={touched.password && errors.password}
   label="Password"
   margin="normal" 
   name="password"
   type="password"
   variant="outlined"
   onBlur={handleBlur}
   onChange={handleChange}
   value={values.password}
  
  
  />
  {errors.submit && (
      <Box sx={{
          mt: 3
      }}>
    <FormHelperText error>
      {errors.submit}
    </FormHelperText>
    </Box>
  )}
  <Button
  fullWidth 
  size="large"
  color="primary"
  bgcolor="primary"
  disabled={isSubmitting}
  type="submit"
  >Signup</Button>
  </form>
    )}
  </Formik>
  </Box>


)




}

export default SignUpForm; 