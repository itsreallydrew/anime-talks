import { Link, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Hunter from '../TestFiles/Test-Hunter';
// import Explorer from '../Explorer/Explorer';
import Explorer from '../TestFiles/Test-Explorer';



function Anime(props) {

const [searchID, setSearchID] = useState(1)

function handleClick() {
    const id = Math.floor(Math.random() * 1500)
    // console.log(id)
    setSearchID(id)
}

console.log(searchID)
    
    return (
        <div>
            
            <Link to='/anime/hunter'>
            <button>Hunter button goes here</button>
            </Link>
            {/* <Link to='anime/explorer'> */}
            <button onClick={handleClick}>Explorer button goes here
            </button>
            {/* </Link> */}
            <div>
            {/* <Route path='/anime/hunter' component={Hunter}/> */}
            {/* <Hunter /> */}
            {/* <Route path='/hunter/details/:idx'/> */}
            <Route exact path='/anime/explorer' render={() => <Explorer searchID={searchID}/>}/>
            {/* <Explorer searchID={searchID} /> */}
            </div>
        </div>
    );
}

export default Anime;