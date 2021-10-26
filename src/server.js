const express = require('express')
const axios = require('axios')
var cors = require('cors')


require('dotenv').config()

const app = express()

app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next(); 
})

app.get('/cat', (req, res) => {
   axios.get('https://www.themealdb.com/api/json/v1/1/categories.php', {
 //headers: {'api-key': process.env.MEALS_API_KEY}
 })
 .then((response) => res.json(response.data))
 .catch((err) => res.status(500).json({type: 'error', message:err.message}))

})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Listening on ${PORT}`)) 