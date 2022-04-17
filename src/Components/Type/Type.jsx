import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Type() {
	const { type } = useParams();
	const [isManga, setIsManga] = useState(false);

	function checkManga() {
		type === 'manga' ? setIsManga(true) : setIsManga(false);
	}

	useEffect(() => {
		checkManga();
	}, [type]);

	return (
		<div className={`type-page ${isManga ? 'manga-bg' : 'anime-bg'}`}>
			<h1>Which path do you choose?</h1>
			<section className='type'>
				<Link to={`/${type}/hunter`}>Hunter</Link>
				<Link to={`/${type}/explorer`}>Explorer</Link>
			</section>
		</div>
	);
}

export default Type;
