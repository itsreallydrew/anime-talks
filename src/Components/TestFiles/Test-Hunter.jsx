import React, { useState, useEffect, useContext } from 'react'
// import SearchResults from '../Results/SearchResults'
import SearchForm from '../SearchForm/SearchForm'
import SearchResults from '../TestFiles/Test-SearchResults'
import NavBar from '../Utils/NavBar'
import '../Hunter/Hunter.css'
import { ChoiceContext } from '../Utils/ChoiceContext'



function Hunter({choice}) {
const [searchString, setSearchString] = useState('')
const [title, setTitle] = useState([])

console.log(choice)

useEffect(() => {
    getTitle(searchString)
}
, [])


function getTitle(searchString) {
    // const url = `https://api.jikan.moe/v3/search/anime?q=${searchString}`
    const url = `https://api.jikan.moe/v3/search/${choice}?q=${searchString}`
    
    fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        if (!res.hasOwnProperty('results')) {
         setTitle([res])
        } else setTitle([res.results[0], res.results[1], res.results[2]])
    })
    .catch(console.error)
    
}

function handleChange(e) {
    setSearchString(e.target.value)
}

function handleSubmit(e) {
    e.preventDefault()
    getTitle(searchString)
}





    return (
        <div className="hunter-page">
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
            <SearchResults title={title}/>
                </div>
            </div>
        </div>

    );
}

export default Hunter;