import { Link, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Hunter from '../TestFiles/Test-Hunter';
// import Explorer from '../Explorer/Explorer';
import Explorer from '../TestFiles/Test-Explorer';
import '../Anime/Anime.css'
import { Header } from '../Utils/Header';




function Anime(props) {

    
    return (
        <section>
         <Header />   
        <div className='anime-page'>
            
            <Link to='/anime/hunter'>
            <button>Hunter button goes here</button>
            </Link>
            <Link to='anime/explorer'>
            <button>Explorer button goes here
            </button>
            </Link>
            <div>
            {/* <Route exact path='/anime/explorer' render={() => <Explorer searchID={searchID}/>}/> */}
            {/* <Explorer /> */}
            </div>
        </div>
        </section>
    );
}

export default Anime;