import { Link, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Hunter from '../Hunter/Hunter';
import Explorer from '../Explorer/Explorer';



function Anime(props) {


Math.floor(Math.random() * 10000)

const [searchID, setSearchID] = useState(null)
const [randomAnime, setRandomAnime] = useState([])

    useEffect(() => {
        getRandomAnime(searchID)
    }
    , [])
    
    
    function getRandomAnime(searchID) {
        const url = `https://api.jikan.moe/v3//anime/${searchID}`
        
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

function handleClick() {
    let id = Math.floor(Math.random() * 1500)
    setSearchID(id)
}
    
    return (
        <div>
            
            <Link to='/anime/hunter'>
            <button>Hunter button goes here</button>
            </Link>
            <Link to='anime/explorer'>
            <button>Explorer button goes here</button>
            </Link>
            <div>
            <Route path='/anime/hunter' component={Hunter} exact/>
            <Route path='/anime/explorer' component={Explorer}/>
            </div>
        </div>
    );
}

export default Anime;