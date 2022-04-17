import React, { useState } from 'react';
import { Link, Route, NavLink, Switch } from 'react-router-dom';
import Anime from './Components/Anime/Anime';
import Explorer from './Components/Explorer/Explorer';
import Hunter from './Components/Hunter/Hunter';
import './App.css';
import Trailer from './assets/7071087.mp4';
import Manga from './Components/Manga/Manga';
import logo from './assets/anime-talks-logo.png';
import Home from './Home/Home';
import Type from './Components/Type/Type';
import Mode from './Components/Mode/Mode';
import NavBar from './Components/Utils/NavBar';
import Header from './Components/Utils/Header';

function App(props) {
	return (
		<div>
			<Header />
			{/* <NavBar /> */}
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/:type' component={Type} />
					<Route path='/:type/:mode' component={Mode} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
