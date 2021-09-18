import React, { useState, useEffect } from 'react'
import RandomResults from '../Results/RandomResults'




function Explorer({ searchID }) {

const [randomAnime, setRandomAnime] = useState([])

    useEffect(() => {
        getRandomAnime(searchID)
    }
    , [randomAnime])
    
    
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
                {randomAnime.length > 0 && <RandomResults anime={randomAnime}/>}
            </div>
        );
}

export default Explorer;