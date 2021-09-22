import React, { useState, useEffect } from 'react'
import RandomResults from '../TestFiles/Test-RandomResults'
import NavBar from '../Utils/NavBar'
import '../Explorer/Explorer.css'




function Explorer({choice}) {

const [randomTitle, setRandomTitle] = useState([])
const [searchID, setSearchID] = useState(1)

function handleClick() {
    const id = Math.floor(Math.random() * 10000)
    // console.log(id)
    setSearchID(id)
}

console.log(searchID)

    useEffect(() => {
        getRandomTitle(searchID)
    }
    , [searchID])
    
    
    function getRandomTitle(searchID) {
        const url = `https://api.jikan.moe/v3/${choice}/${searchID}`
        
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (!res.hasOwnProperty('results')) {
                setRandomTitle([res])
            } else setRandomTitle([res.results[0], res.results[1], res.results[2]])
        })
        .catch(console.error)
        
    }

    
        return (
            <div className='explorer-page'>
                {/* <header>
                <NavBar />
                </header> */}
                <div>
                <button onClick={handleClick}>Explore</button>
                {randomTitle.length > 0 && <RandomResults choice={choice} randomTitle={randomTitle}/>}
                </div>
            </div>
        );
}

export default Explorer;