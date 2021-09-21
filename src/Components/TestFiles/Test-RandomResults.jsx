import React from 'react';
import '../Results/RandomResults.css'
import { Spinner } from 'react-bootstrap';

function RandomResults({ anime }) {
if (!anime) {
<Spinner animation="border" role="status">
  <span className="visually-hidden"></span>
</Spinner>
} else
    return (
        <div>
            {anime.map((random) => (
                <div className='random-card'>
                    <div className='random-image'>
                        <img src={random.image_url} alt="" />                        
                    </div>
                    <div className='random-details'>
                        <h2>{random.title}</h2>
                        <h4>Score: {random.score}</h4>
                        <p>Episodes: {random.episodes}</p>
                    </div>
                    <div className='explorer-synopsis'>
                        <p>{random.synopsis}</p>
                        <a href={random.url}>More Details</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RandomResults;