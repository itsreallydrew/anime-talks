import React, { useState, useEffect } from 'react'
import RandomResults from '../Results/RandomResults'




function Explorer(params) {

 Math.floor(Math.random() * 10000)

const [searchID, setSearchID] = useState(null)
const [anime, setAnime] = useState([])

    useEffect(() => {
        getRandomAnime(searchID)
    }
    , [])
    
    
    function getRandomAnime(searchID) {
        const url = `https://api.jikan.moe/v3/search/anime?q=${searchID}`
        
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
            <div>
                {anime.length > 0 && <RandomResults anime={anime}/>}
            </div>
        );
}

export default Explorer;