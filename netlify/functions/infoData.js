const axios = require('axios')




exports.handler = async function (event, context) {
    console.log(event)
    console.log(context) 
    try {
        const { endpoint } = event.queryStringParameters
       // const { endpoint2 } = event.queryStringParameters
        const response = await axios.get(`www.themealdb.com/api/json/v1/1/${endpoint}.php`, {
     //   headers: {'api-key': process.env.MEAL_API_KEY}
    })
    console.log(response)
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