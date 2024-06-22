import { useEffect, useState } from "react"


const useGetSearchResults = (query) => {

    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        getSearchList()
    }, [query])

    const getSearchList = async () => {
        try {
            setLoading(true)
            const data = await fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${import.meta.env.VITE_API_KEY}`)
        const json = await data.json()
        setSearchResults(json.articles)
        setLoading(false)
        setError("")
            
        } catch (error) {
            setError("Failed to fetch news. Try again after some time.")
            setLoading(false)
        }
        
    }


    return {searchResults, loading, error}
}

export default useGetSearchResults