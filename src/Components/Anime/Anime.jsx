import { Link, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Hunter from '../TestFiles/Test-Hunter';
// import Explorer from '../Explorer/Explorer';
import Explorer from '../TestFiles/Test-Explorer';
import '../Anime/Anime.css'
import { Header } from '../Utils/Header';




function Anime({choice}) {

    console.log(choice)

    function handleClick(e) {
    console.log(e)
    if (e.target.className === 'hunter') {
      return <Hunter />
    } else if (e.target.className === 'explorer'){
      return <Explorer />
    }
  }
    
    return (
        <section>
         {/* <Header />    */}
        <div className='anime-page'>
            <div className='choose-path'>
            <Link to='/anime/hunter'>
            <button className='hunter' onClick={handleClick}>Hunter button goes here</button>
            </Link>
            <Link to='anime/explorer'>
            <button className='explorer' onClick={handleClick}>Explorer button goes here
            </button>
            </Link>

            </div>
            <div>
            {/* <Route exact path='/anime/explorer' render={() => <Explorer searchID={searchID}/>}/> */}
            {/* <Explorer /> */}
            </div>
        </div>
        </section>
    );
}

export default Anime;