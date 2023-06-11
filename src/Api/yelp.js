//import axios from "axios";
//const axios = require('axios')
import axios from "axios"
const token = "9U4sF8JFbGNZmW-0aeOrkdfUqC18rFwGQlxSD7YcP6XnSa2uHsnONbEzNG6VQMvkWKuvHTOnupEUZ25qDOupQ2peHxVkeTr-kYxFSiRUdJujYr-VhCeddESIWeh_ZHYx"
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${token}`
    }
})

// const searchResult = async (searchTerm) => {
//     try {
//         const result = await api.get('/search', {
//             params: {
//                 term: searchTerm,
//                 limit: 50,
//                 location: "New York City"
//             }
//         })
//         return result.data.businesses
//         //console.log(result.data.businesses)
//     } catch (err) {
//         throw new Error(err)
//     }
// }

// module.exports = {
//     searchResult
// }
