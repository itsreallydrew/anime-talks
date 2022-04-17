import { NavLink, Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav className='nav'>
			<NavLink to='/anime' className='anime-nav'>
				Anime
			</NavLink>
			<NavLink to='/manga' className='manga-nav'>
				Manga
			</NavLink>
			<a href='https://www.snokido.com/game/bleach-vs-naruto'>Battle</a>
		</nav>
	);
}

export default NavBar;
