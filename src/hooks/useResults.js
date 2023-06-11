import api from '../Api/yelp'
import { useState, useEffect } from 'react'
export const useResult = () => {
    const [result, setResult] = useState([])
    const [ERROR, setERROR] = useState("")
    useEffect(() => { searchResult("pasta") }, [])
    const searchResult = async (searchTerm) => {
        try {
            console.log("searching..")
            const result = await api.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: "New York City"
                }
            })
            setResult(result.data.businesses)
            setERROR("")
            console.log("got Result")
        } catch (err) {
            console.log(err)
            setResult([])
            setERROR("Something Went Wrong")
        }
    }
   
    return [searchResult, ERROR, result]
}