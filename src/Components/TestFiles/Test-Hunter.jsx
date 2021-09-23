import React, { useState, useEffect, useContext } from 'react'
// import SearchResults from '../Results/SearchResults'
import SearchForm from '../SearchForm/SearchForm'
import SearchResults from '../TestFiles/Test-SearchResults'
import NavBar from '../Utils/NavBar'
import '../Hunter/Hunter.css'



function Hunter({choice}) {
const [searchString, setSearchString] = useState('')
const [title, setTitle] = useState()
const [lastSearch, setLastSearch] = useState('')
const [errorStatus, setErrorStatus] = useState(false) 

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
        if (res.type === "BadResponseException") {
            setErrorStatus(true)
            return
        } else if (!res.hasOwnProperty('results')) {
         setTitle([res])
         setErrorStatus(false)
        } else setTitle([res.results[0], res.results[1], res.results[2]])
        setErrorStatus(false)
        setLastSearch(searchString)
        setSearchString('')
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
                    <SearchForm 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    searchString={searchString} />
                <div className='search-results'>
                    {title && <SearchResults choice={choice} title={title}/>}
                    {/* <SearchResults choice={choice}  title={title}/> */}
                </div>
            </div>
        </div>

    );
}

export default Hunter;