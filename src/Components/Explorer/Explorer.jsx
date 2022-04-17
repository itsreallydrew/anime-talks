import React, { useState, useEffect } from 'react';
import RandomResults from '../Results/RandomResults';
import '../Explorer/Explorer.css';
import { useParams } from 'react-router-dom';
import LoadingIndicator from '../Utils/LoadingIndictor';

function Explorer() {
	const { type } = useParams();
	const [randomTitle, setRandomTitle] = useState([]);
	const [searchID, setSearchID] = useState(Math.floor(Math.random() * 100000));
	const [errorStatus, setErrorStatus] = useState(false);

	function handleClick() {
		const id = Math.floor(Math.random() * 10000);
		setSearchID(id);
	}

	useEffect(() => {
		getRandomTitle(searchID);
	}, [searchID]);

	function getRandomTitle(searchID) {
		const url = `https://api.jikan.moe/v3/${type}/${searchID}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				if (res.type === 'BadResponseException') {
					setErrorStatus(true);
					handleClick();
					return;
				} else if (!res.hasOwnProperty('results')) {
					setErrorStatus(false);
					setRandomTitle([res]);
				} else setErrorStatus(false);
				// setRandomTitle([res.results[0], res.results[1], res.results[2]]);
				setRandomTitle([res.results[0]]);
			})
			.catch(console.error);
	}

	return (
		<div className='explorer-page'>
			<div>
				<button className='explore-button' onClick={handleClick}>
					Explore
				</button>
				{!errorStatus ? (
					<RandomResults type={type} randomTitle={randomTitle} />
				) : (
					// <div className='error-message'>
					// 	<h2>No Result found! Please click explore again!</h2>
					// </div>
					<div className='error-message'>
						<LoadingIndicator />
					</div>
				)}
			</div>
		</div>
	);
}

export default Explorer;
