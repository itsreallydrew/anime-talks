import React from 'react';
import '../Results/RandomResults.css'
import { Spinner } from 'react-bootstrap';

function RandomResults({ randomTitle }) {
if (!randomTitle) {
    return (
    <Spinner animation="border" role="status">
    <span className="visually-hidden"></span>
    </Spinner>

    )
} else
    return (
        <div>
            {randomTitle.map((random) => (
                <div className='random-card'>
                    <div className='random-image'>
                        <a href={random.url}>
                        <img className='random-poster' src={random.image_url} alt="" />                        
                        </a>
                    </div>
                    <div className='random-details'>
                        <h2>{random.title}</h2>
                        <h4>Score: {random.score}</h4>
                        <p>Episodes: {random.episodes}</p>
                    </div>
                    <div className='explorer-synopsis'>
                        <p>{random.synopsis}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RandomResults;