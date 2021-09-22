import React, { useState, useReducer, useContext } from 'react'
import { Link, Route, NavLink } from 'react-router-dom'
import Anime from './Components/Anime/Anime';
import Explorer from './Components/TestFiles/Test-Explorer';
import Hunter from './Components/TestFiles/Test-Hunter';
import './App.css'
import Trailer from './assets/7071087.mp4'
import { ChoiceContext } from './Components/Utils/ChoiceContext';
import { render } from '@testing-library/react';
import Manga from './Components/Manga/Manga';
// import NavBar from './Components/Utils/NavBar';






function App(props) {
  const [hidden, setHidden] = useState(false)

  function handleClick(e) {
    console.log(e)
    setHidden(true)
    if (e.target.className === 'anime') {
      setChoice(e.target.className)
      return <Anime choice={choice}/>
    } else if (e.target.className === 'manga'){
      setChoice(e.target.className)
      return <Manga choice={choice}/>
    }
  }

const [choice, setChoice] = useState('')

console.log(choice)

  return (
    <main className='homepage'>
      {!hidden && <video src={Trailer} muted loop autoPlay></video>}
      {hidden && <header>
            <nav>
            <NavLink to='/anime' activeClassName='current'>
                Anime
            </NavLink>
            <NavLink to='/manga' activeClassName='current'>
                Manga
            </NavLink>
            <NavLink to='/about' activeClassName='current'>
                About
            </NavLink>
            </nav>
      </header>}
      <div className='main-choice'>
        {/* <ChoiceContext.Provider value={{choice}}> */}
        <Link to='/anime'>
          {!hidden && <button className='anime' onClick={handleClick}>Anime</button>}
        </Link>
        {/* <Link to='/anime'>
          {!hidden && <button className='anime' onClick={() => {
            handleClick();
            dispatch('ANIME')
          }} >Anime button will go here</button>}
        </Link> */}
        <Link to='/manga'>
          {!hidden && <button className='manga' onClick={handleClick}>Manga button will go here</button>}
        </Link>
        {/* </ChoiceContext.Provider> */}
      </div>
      <div>
        {/* <Route exact path='/' component={App}/> */}
        <Route exact path='/anime' component={Anime}/>
        <Route exact path='/manga' component={Manga}/>
        <Route exact path='/anime/hunter' render={() => <Hunter choice={choice}/>}/>
        <Route exact path='/anime/explorer' render={() => <Explorer choice={choice}/>}/>
        <Route exact path='/manga/hunter' render={() => <Hunter choice={choice}/>}/>
        <Route exact path='/manga/explorer' render={() => <Explorer choice={choice}/>}/>
      </div>
    </main>
  );
}

export default App;