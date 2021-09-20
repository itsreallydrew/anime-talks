import React from 'react'
import { Link, Route } from 'react-router-dom'
import Anime from './Components/Anime/Anime';
import Explorer from './Components/TestFiles/Test-Explorer';
import Hunter from './Components/TestFiles/Test-Hunter';
import './App.css'



function App() {
  return (
    <main className='homepage'>
      {/* <header>Header component will go here</header> */}
      <div className='main-choice'>
        <Link to='/anime'>
        <button className='anime'>Anime button will go here</button>
        </Link>

      </div>
      <div>
        <Route exact path='/anime' component={Anime}/>
        <Route exact path='/anime/hunter' component={Hunter}/>
        <Route exact path='/anime/explorer' component={Explorer} />

        {/* <Anime /> */}
      </div>
    </main>
  );
}

export default App;