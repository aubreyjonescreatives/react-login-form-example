import { Box, Button, TextField, FormHelperText } from '@mui/material'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

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


const LoginForm = (props) => {

//const {closeHandler} = props

const history = useHistory()

const handleClose = () => {
  history.push('/MealFavorites')
  console.log("Should close now...")

}
return (

    <Box sx={style}>
    <Formik 
    initialValues={{
        email: "example@example.com", 
        password: "Pass123", 

    }}
    validationSchema={
        Yup.object().shape({
            email: Yup.string()
            .email('Must be a valid email.')
            .max(255)
            .required('Email is required.'),
            password: Yup.string()
            .min(6, 'Must include at least 6 characters.')
            .max(25, 'We KNOW your password isn' + 't more than 25 characters long.')
            .required('A password is required.'),
        })}
    onSubmit={(value, {setErrors, setStatus, setSubmitting}) => {
    try {
        console.log('Submit Successful!')
        setStatus({success: true})
        setSubmitting(false)
    } catch (err) {
        console.error(err)
        setStatus({success: false})
        setErrors({ submit: err.message })
        setSubmitting(false)
    } finally {
        handleClose()
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
  error={Boolean(touched.email && errors.email)}
  fullWidth
  helperText={touched.email && errors.email}
  label="Email Address"
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
  >Login</Button>
  </form>
    )}
  </Formik>
  </Box>


)




}

export default LoginForm; 