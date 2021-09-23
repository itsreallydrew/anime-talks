import { Link } from 'react-router-dom'
import React from 'react'
import Hunter from '../Hunter/Hunter';
import Explorer from '../Explorer/Explorer';
import '../Anime/Anime.css'




function Anime({choice}) {


    function handleClick(e) {
        if (e.target.className === 'hunter') {
            return <Hunter />
        } else if (e.target.className === 'explorer'){
            return <Explorer />
        }
  }
    
    return (
        <section>
            <div className='anime-page'>
                <div className='choose-path'>
                    <Link to='/anime/hunter'>
                        <button className='hunter' onClick={handleClick}>Hunter</button>
                    </Link>
                    <Link to='anime/explorer'>
                        <button className='explorer' onClick={handleClick}>Explorer</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Anime;