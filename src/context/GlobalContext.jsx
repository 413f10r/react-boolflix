import axios from 'axios';
import { createContext, useState, useContext } from "react"



const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    // const options = {
    //     method: 'GET',
    //     url: 'https://api.themoviedb.org/',
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjU1NDYwMzk3MDQ4MjM3ZjJiYzFkNWViY2Y3ODA1YiIsIm5iZiI6MTc0MTE2Njk0OS41NTMsInN1YiI6IjY3YzgxOTY1ZjA2N2JjZmQ2ZDZlMjg3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BnQVgXZ9oiRwz4V2xObU3yqOvQGf80mpHy_Ey3zfsJs'
    //     }
    // };

    // axios
    //     .request(options)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.error(err));





    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };