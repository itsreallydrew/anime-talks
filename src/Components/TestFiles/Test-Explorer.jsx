import React, { useState, useEffect } from 'react'
import RandomResults from '../Results/RandomResults'




function Explorer() {

const [randomAnime, setRandomAnime] = useState([])
const [searchID, setSearchID] = useState(1)

function handleClick() {
    const id = Math.floor(Math.random() * 1500)
    // console.log(id)
    setSearchID(id)
}

console.log(searchID)

    useEffect(() => {
        getRandomAnime(searchID)
    }
    , [searchID])
    
    
    function getRandomAnime(searchID) {
        const url = `https://api.jikan.moe/v3/anime/${searchID}`
        
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (!res.hasOwnProperty('results')) {
                setRandomAnime([res])
            } else setRandomAnime([res.results[0], res.results[1], res.results[2]])
        })
        .catch(console.error)
        
    }

    
        return (
            <div>
                <button onClick={handleClick}>Explore</button>
                {randomAnime.length > 0 && <RandomResults anime={randomAnime}/>}
            </div>
        );
}

export default Explorer;