import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Anime from '../Anime/Anime';
import Manga from '../Manga/Manga';
import logo from '../../assets/anime-talks-logo.png';
import About from '../About/About';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<Link to='/'>
				<img id='logo' src={logo} alt='anime talks logo' />
			</Link>
			<NavBar />
		</header>
	);
}

export default Header;
