import React, { useState, useEffect, useContext } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../Results/SearchResults';
import NavBar from '../Utils/NavBar';
import '../Hunter/Hunter.css';
import { useParams } from 'react-router';

function Hunter() {
	const { type } = useParams();
	const [searchString, setSearchString] = useState('');
	const [title, setTitle] = useState();
	const [lastSearch, setLastSearch] = useState('');
	const [errorStatus, setErrorStatus] = useState(false);

	useEffect(() => {
		getTitle(searchString);
	}, []);

	function getTitle(searchString) {
		const url = `https://api.jikan.moe/v3/search/${type}?q=${searchString}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				if (res.type === 'BadResponseException') {
					setErrorStatus(true);
					return;
				} else if (!res.hasOwnProperty('results')) {
					setTitle([res]);
					setErrorStatus(false);
				} else setTitle([...res.results]);
				setErrorStatus(false);
				setLastSearch(searchString);
				setSearchString('');
			})
			.catch(console.error);
	}

	function handleChange(e) {
		setSearchString(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		getTitle(searchString);
	}

	return (
		<div className='hunter-page'>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			{/* make the display area a grid and add a gap between each */}
			<div className='display-area'>
				{title && <SearchResults title={title} />}
			</div>
		</div>
	);
}

export default Hunter;
