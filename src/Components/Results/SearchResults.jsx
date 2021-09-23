import React from 'react';
import '../Results/SearchResults.css'
import { Spinner } from 'react-bootstrap';

function SearchResults({ title, choice }) {

if (!title) {
    return (
                <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
                </Spinner>
    )                
     
} else  return (
            <div  className='results-container'>
                {title.map((items) => (
                    <div className='results-card'>
                        <div className='title' >
                            <h3 >{items.title}</h3>
                        </div>
                        <div className='info'>
                            <h4 className='score'>Rating: {items.score}</h4>
                            { (choice === 'anime') ? <h4>Episodes: {items.episodes}</h4> : <h4>Chapters: {items.chapters}</h4>}
                            <h4>Type: {items.type}</h4>
                        </div>
                        <div className='poster' >
                            <a href={items.url}>
                                <img className='search-poster' src={items.image_url} alt={items.title} />
                            </a>
                        </div>
                        <div className='synopsis'>
                            <p>{items.synopsis}</p>
                        </div>
                    </div>
                ))}
            </div>
    )
                
    }

export default SearchResults;