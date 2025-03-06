import { useGlobalContext } from "../context/GlobalContext"
import { useEffect, useState } from "react"





const Cards = () => {

    const { movies, getApiDataMovies, series, getApiDataSeries } = useGlobalContext()

    useEffect(() => {

        getApiDataMovies()
        getApiDataSeries()

    }, [])

    return (

        <>

            <main className="">
                <div className="container">
                    <div className="row">
                        <h2 className="text-white mt-4 fs-1">Film</h2>
                        {
                            movies.map((movie) => {

                                return (
                                    <div key={movie.id} className="col-4 h-100 my-3">
                                        <div className="">
                                            <div className="">
                                                <img className="" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
                                                <div className="">
                                                    <h3>{movie.title}</h3>
                                                    <h4>{movie.original_title}</h4>
                                                    <h4>{movie.original_language}</h4>
                                                    {/* <h4>{newStars(movie.vote_average)}</h4> */}
                                                    <p>{movie.overview}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>








                <div className="container">
                    <div className="row">
                        <h2 className="text-white mt-4 fs-1">Serie TV</h2>
                        {
                            series.map((serie) => {

                                return (
                                    <div key={serie.id} className="col-4 h-100 my-3">
                                        <div className="">
                                            <div className="">
                                                <img className="" src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} alt={serie.title} />
                                                <div className="">
                                                    <h3>{serie.name}</h3>
                                                    <h4>{serie.original_title}</h4>
                                                    <h4>{serie.original_language}</h4>
                                                    {/*  <h4>{Stars(serie.vote_average)}</h4>*/}
                                                    <p>{serie.overview}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>



            </main>
        </>

    )
}

export default Cards
