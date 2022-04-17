import React from 'react';
import '../Results/SearchResults.css';

function SearchResults({ title, choice }) {
	// let resultsList;

	// if (!title) {
	// 	return (
	// 		<Spinner animation='border' role='status'>
	// 			<span className='visually-hidden'></span>
	// 		</Spinner>
	// 	);
	// } else

	return title.map((items) => (
		// take the height and width off of the card
		<div className='results-card'>
			{/* <div className='title'> */}
			<h4>{items.title}</h4>
			{/* </div> */}
			{/* <div className='poster'> */}
			<a href={items.url}>
				<img
					className='search-poster'
					src={items.image_url}
					alt={items.title}
				/>
			</a>
			{/* </div> */}
			<div className='info'>
				<h4 className='score'>Rating: {items.score ? items.score : 'N/A'}</h4>
				{choice === 'anime' ? (
					<p>Episodes: {items.episodes}</p>
				) : (
					<p>Chapters: {items.chapters}</p>
				)}
				<p>Type: {items.type}</p>
			</div>
			{/* <div className='synopsis'>
					<p>{items.synopsis}</p>
				</div> */}
		</div>
	));
}

export default SearchResults;
