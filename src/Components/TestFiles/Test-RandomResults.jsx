import React from 'react';
import '../Results/RandomResults.css'
import { Spinner } from 'react-bootstrap';

function RandomResults({ randomTitle, choice }) {
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
                        {(choice === 'anime') ? <p>Episodes: {random.episodes}</p> : <p>Chapters: {random.chapters}</p>}
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