import React from 'react';
import { Link } from 'react-router-dom';
import Anime from '../Components/Anime/Anime';
import Manga from '../Components/Manga/Manga';
import Trailer from '../assets/7071087.mp4';
import TV from '../assets/pinpng.com-monitor-png-142093.png';

function Home(props) {
	return (
		<div className='homepage'>
			<h2>What Are You Searching For?</h2>
			<div className='video-container'>
				<video
					src={Trailer}
					muted
					loop
					autoPlay
					controls
					controlsList='nodownload nofullscreen'></video>
			</div>
			<div className='choice'>
				<Link to='/anime' className='anime'>
					Anime
				</Link>
				<Link to='/manga' className='manga'>
					Manga
				</Link>
			</div>
		</div>
	);
}

export default Home;
