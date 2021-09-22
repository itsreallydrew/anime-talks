import React, { useState, useEffect } from 'react'
import { Link, Route, NavLink } from 'react-router-dom'
import Anime from './Components/Anime/Anime';
import Explorer from './Components/TestFiles/Test-Explorer';
import Hunter from './Components/TestFiles/Test-Hunter';
import './App.css'
import Trailer from './assets/7071087.mp4'
import Manga from './Components/Manga/Manga';
// import NavBar from './Components/Utils/NavBar';
import Modal from './Components/Utils/Modal'
import About from './Components/About/About'






function App(props) {
  const [hidden, setHidden] = useState(false)

  function handleClick(e) {
    console.log(e)
    setHidden(true)
    if (e.target.ariaLabel === 'anime') {
      setChoice(e.target.ariaLabel)
      return <Anime />
    } else if (e.target.ariaLabel === 'manga'){
      setChoice(e.target.ariaLabel)
      return <Manga/>
    }
  }
setTimeout(() => {
  return <Modal />
}, 5000);

const [choice, setChoice] = useState('')

console.log(choice)

  return (
    <main className='homepage'>
      {!hidden && <video src={Trailer} muted loop autoPlay></video>}
      {hidden && <header>
            <nav>
            <NavLink to='/anime' activeClassName='current'>
              <h4 aria-label='anime' onClick={handleClick}>
                Anime
              </h4>
            </NavLink>
            <NavLink to='/manga' activeClassName='current'>
                <h4 onClick={handleClick} aria-label='manga' >
                Manga
                </h4>
            </NavLink>
            <NavLink to='/about' activeClassName='current'>
                <h4>
                About
                </h4>
            </NavLink>
            </nav>
      </header>}
      {!hidden && <div className='make-choice'>
        <h2>Make Your Choice</h2>
      </div>}
      <div className='main-choice'>
        <Link to='/anime'>
          {!hidden && <button className='anime' aria-label='anime' onClick={handleClick}>Anime</button>}
        </Link>

        <Link to='/manga'>
          {!hidden && <button className='manga' aria-label='manga' onClick={handleClick}>Manga</button>}
        </Link>
      </div>
      <div>
        {/* <Route exact path='/' component={App}/> */}
        <Route exact path='/anime' component={Anime}/>
        <Route exact path='/manga' component={Manga}/>
        <Route exact path='/anime/hunter' render={() => <Hunter choice={choice}/>}/>
        <Route exact path='/anime/explorer' render={() => <Explorer choice={choice}/>}/>
        <Route exact path='/manga/hunter' render={() => <Hunter choice={choice}/>}/>
        <Route exact path='/manga/explorer' render={() => <Explorer choice={choice}/>}/>
        <Route exact path='/about' component={About}/>
      </div>
    </main>
  );
}

export default App;