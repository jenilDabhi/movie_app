import React, { useEffect, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import "./style.css"


const Movie = () => {
    //this is useState hook
    const [search, setSearch] = useState('Avenger')

    const [data, setData] = useState([])

    useEffect(() => {
        fetchLatest()
    }, [])

    const fetchLatest = async () => {
        const fetchMovie = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=5d716f86&`);
        const fetchData = await fetchMovie.json()
        console.log(fetchData.Search);
        setData(fetchData.Search)

    }

    return (
        <>
            <div className='header'>
                <div className="logo">
                    <h3>CreativeHub</h3>
                </div>
                <div className="Search">
                    <input type="text" placeholder='search...' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={fetchLatest}><IoMdSearch /> </button>
                </div>
            </div>

            <div className="movie">
                <h1>Movie</h1>
                <div className="container">
                    {
                        data.map((curElm) => {
                            return (
                                <>

                                    <div className="box">
                                        <div className="img-box">
                                            <img src={curElm.Poster} width={"250px"} height={"400px"} />
                                        </div>
                                        <div className="details">
                                            <h3>{curElm.Title}</h3>
                                            <h4>Release Date :- {curElm.Year}</h4>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Movie