import axios from 'axios';
import { createContext, useState, useContext, useEffect } from "react"



const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    //.env
    const endpoint = import.meta.env.VITE_ENDPOINT_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiToken = import.meta.env.VITE_TOKEN;



    //data
    // const [query, setQuery] = useState([])
    const [movies, setMovies] = useState([])
    const [searchMovies, setSearchMovies] = useState("")

    const [series, setSeries] = useState([])
    const [searchSeries, setSearchSeries] = useState("")

    const handleSearch = (e) => {
        setSearchMovies(e.target.value)
        setSearchSeries(e.target.value)

    }

    const handleSummit = (e) => {
        e.preventDefault()

        getApiDataMovies()
        getApiDataSeries()

    }

    //https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro 

    //Prima ApiCall - Film
    const getApiDataMovies = () => {
        const options = {
            method: 'GET',
            url: `${endpoint}movie?query=${searchMovies}&include_adult=false&language=it-IT&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiToken}`
            }
        }

        axios.request(options)
            .then(res => setMovies(res.data.results))
            .catch(err => console.error(err));
    }

    //Seconda ApiCall - serie
    const getApiDataSeries = () => {
        const options = {
            method: 'GET',
            url: `${endpoint}tv?query=${searchSeries}&include_adult=false&language=it-IT&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiToken}`
            }
        }

        axios.request(options)
            .then(res => setSeries(res.data.results))
            .catch(err => console.error(err));

    }



    const value = {
        handleSummit,
        handleSearch,
        movies,
        setMovies,
        getApiDataMovies,
        getApiDataSeries,
        series
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )


}
//custom hooks
const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };