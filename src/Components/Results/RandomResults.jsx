import React from 'react';

function RandomResults({ anime }) {
    return (
        <div>
            {anime.map((random) => (
                <div>
                    <img src={random.image_url} alt="" />
                    <h3>{random.title}</h3>
                    <h4>{random.score}</h4>
                    <p>Episodes: {random.episodes}</p>
                    <div>
                        <p>{random.synopsis}</p>
                        <a href={random.url}>More Details</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RandomResults;