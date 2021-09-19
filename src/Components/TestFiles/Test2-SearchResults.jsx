import React from 'react';
import Details from './Details';
import { Link } from 'react-router-dom'


function SearchResults({ anime, searchString }) {
    return (
        <div>
            {anime.map((items, idx) => (
                <div key={idx}>
                    <img src={items.image_url} alt="" />
                    <h3>{items.title}</h3>
                    <h4>{items.score}</h4>
                    {/* <p>Episodes: {items.episodes}</p> */}
                    <Link to={`/hunter/details/${idx}`}>
                    <div>
                        <Details items={items} idx={idx} searchString={searchString}/>
                        {/* <p>{items.synopsis}</p> */}
                        {/* <a href={items.url}>More Details</a> */}
                        console.log(items)
                    </div>
                    </Link>
                </div>
            ))}
        </div>
)
}
export default SearchResults;