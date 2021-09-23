import React, { useState, useEffect } from 'react'
import RandomResults from '../TestFiles/Test-RandomResults'
import NavBar from '../Utils/NavBar'
import '../Explorer/Explorer.css'
import { Spinner } from 'react-bootstrap'




function Explorer({choice}) {

const [randomTitle, setRandomTitle] = useState([])
const [searchID, setSearchID] = useState(Math.floor(Math.random() * 10000))
const [errorStatus, setErrorStatus] = useState(false) 

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
            if (res.type === "BadResponseException") {
                setErrorStatus(true)
                return
            }
            else if (!res.hasOwnProperty('results')) {
                setErrorStatus(false)
                setRandomTitle([res])
            } else 
            setErrorStatus(false)
            setRandomTitle([res.results[0], res.results[1], res.results[2]])
        })
        .catch(console.error)
        
    }

    
        return (
            <div className='explorer-page'>
                {/* <header>
                <NavBar />
                </header> */}
                <div>
                    <button className='explore-button' onClick={handleClick}>Explore</button>
                    {!errorStatus ? <RandomResults choice={choice} randomTitle={randomTitle}/> : 
                        <div className='error-message'>
                            <h2>No Result found! Please click explore again!</h2>
                        </div>}
                </div>
            </div>
        );
}

export default Explorer;