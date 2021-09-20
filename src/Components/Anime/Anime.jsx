import { Link, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Hunter from '../TestFiles/Test-Hunter';
// import Explorer from '../Explorer/Explorer';
import Explorer from '../TestFiles/Test-Explorer';



function Anime(props) {

    
    return (
        <div>
            
            <Link to='/anime/hunter'>
            <button>Hunter button goes here</button>
            </Link>
            <Link to='anime/explorer'>
            <button>Explorer button goes here
            </button>
            </Link>
            <div>
            {/* <Route exact path='/anime/explorer' render={() => <Explorer searchID={searchID}/>}/> */}
            <Explorer />
            </div>
        </div>
    );
}

export default Anime;