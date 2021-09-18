import React from 'react';

function SearchResults({ anime }) {
    return (
        <div>
            {anime.map((items) => (
                <div>
                    <img src={items.image_url} alt="" />
                    <h3>{items.title}</h3>
                    <h4>{items.score}</h4>
                    <p>Episodes: {items.episodes}</p>
                    <div>
                        <p>{items.synopsis}</p>
                        <a href={items.url}>More Details</a>
                    </div>
                </div>
            ))}
        </div>
)
}
export default SearchResults;