import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import Anime from './Components/Anime/Anime';
import Explorer from './Components/TestFiles/Test-Explorer';
import Hunter from './Components/TestFiles/Test-Hunter';
import './App.css'
import Trailer from './assets/7071087.mp4'
import { toggleClass } from 'dom-helpers';




function App(props) {
  const [hidden, setHidden] = useState(false)

  function handleClick(params) {
    setHidden(true)
  }



  return (
    <main className='homepage'>
      {hidden ? null : <video src={Trailer} muted loop autoPlay></video>}
      {/* <video src={Trailer} muted loop autoPlay></video> */}
      {/* { props.location.pathname === '/' && <video src={Trailer} muted loop autoPlay></video> } */}
      {/* <header>Header component will go here</header> */}
      <div className='main-choice'>
        <Link to='/anime'>
          {hidden ? null : <button className='anime' onClick={handleClick} >Anime button will go here</button>}
        </Link>

      </div>
      <div>
        {/* <Route exact path='/' component={App}/> */}
        <Route exact path='/anime' component={Anime}/>
        <Route exact path='/anime/hunter' component={Hunter}/>
        <Route exact path='/anime/explorer' component={Explorer} />

        {/* <Anime /> */}
      </div>
    </main>
  );
}

export default App;