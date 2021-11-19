const axios = require('axios')

const APIKEY = process.env.MEAL_API_KEY


exports.handler = async function (event, context) {
    console.log(event)
    console.log(context) 
    try {
      //  const { querystring } = event.queryStringParameters
       // const { endpoint2 } = event.queryStringParameters
        const response = await axios.get(`https://www.themealdb.com/api/json/v2/${APIKEY}/latest.php`, {
     //   headers: {'api-key': process.env.MEAL_API_KEY}
    })
    return {
        statusCode: 200, 
        body: JSON.stringify(response.data)
    }
    } catch (err) {
        return {
            statusCode: 404, 
            body: err.toString()
        }
    }
}