const axios = require('axios')




exports.handler = async function (event, context) {
    console.log(event)
    console.log(context) 
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`, {
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