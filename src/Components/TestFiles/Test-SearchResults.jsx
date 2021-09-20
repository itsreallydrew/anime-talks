import React from 'react';
import '../Results/SearchResults.css'
import { Spinner } from 'react-bootstrap';

function SearchResults({ anime }) {

    if (anime) {
        return (
            <div  className='results-container'>
                {anime.map((items) => (
                    <div className='results-card'>
                        <div className='title' >
                        <h3 >{items.title}</h3>
                        </div>
                        <div className='info'>
                            <h4 className='score'>Rating: {items.score}</h4>
                            <h4>Episodes: {items.episodes}</h4>
                            <h4>Type: {items.type}</h4>
                        </div>
                        <div className='poster' >
                        <img src={items.image_url} alt={items.title} />
                        </div>
                        <div className='synopsis'>
                            <p>{items.synopsis}</p>
                            <a href={items.url}>More Details</a>
                        </div>
                    </div>
                ))}
            </div>
    )
                
    } else return (
                <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
                </Spinner>

    )
}
export default SearchResults;