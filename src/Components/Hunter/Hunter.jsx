import React, { useState, useEffect } from 'react'
import SearchResults from '../Results/SearchResults'
import SearchForm from '../SearchForm/SearchForm'



function Hunter(props) {
const [searchString, setSearchString] = useState('Bleach')
const [anime, setAnime] = useState([])

useEffect(() => {
    getAnime()
}, [])


function handleChange(e) {
    setSearchString(e.target.value)
}

function handleSubmit(e) {
    e.preventDefault()
}

function getAnime() {
    const url = `https://api.jikan.moe/v3/search/anime?q=${searchString}`

    fetch(url)
    .then(res => res.json)
    .then(res => {
        console.log(res)
    })
    .catch(console.error)
}


    return (
        <div>
            <SearchForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            searchString={searchString} />
            <SearchResults anime={anime}/>
        </div>
    );
}

export default Hunter;