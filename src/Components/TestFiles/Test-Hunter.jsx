import React, { useState, useEffect } from 'react'
// import SearchResults from '../Results/SearchResults'
import SearchForm from '../SearchForm/SearchForm'
import SearchResults from '../TestFiles/Test-SearchResults'
import NavBar from '../Utils/NavBar'
import '../Hunter/Hunter.css'



function Hunter(props) {
const [searchString, setSearchString] = useState('')
const [anime, setAnime] = useState([])

useEffect(() => {
    getAnime(searchString)
}
, [])


function getAnime(searchString) {
    const url = `https://api.jikan.moe/v3/search/anime?q=${searchString}`
    
    fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        if (!res.hasOwnProperty('results')) {
            setAnime([res])
        } else setAnime([res.results[0], res.results[1], res.results[2]])
    })
    .catch(console.error)
    
}

function handleChange(e) {
    setSearchString(e.target.value)
}

function handleSubmit(e) {
    e.preventDefault()
    getAnime(searchString)
}





    return (
        <div className="anime-hunter-page">
            {/* <header>
            <NavBar />    
            </header> */}
            <div className='display-area'>
                <div className='search-form'>
            <SearchForm 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            searchString={searchString} />
                </div>
                <div className='search-results'>
            {/* {anime.length > 0 && <SearchResults anime={anime}/>} */}
            <SearchResults anime={anime}/>
                </div>
            </div>
        </div>

    );
}

export default Hunter;