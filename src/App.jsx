import React from 'react'
import { Link, Route } from 'react-router-dom'
import Anime from './Components/Anime/Anime';
import Explorer from './Components/Explorer/Explorer';
import Hunter from './Components/TestFiles/Test-Hunter';



function App() {
  return (
    <main>
      <header>Header component will go here</header>
      <div>
        <Link to='/anime'>
        <button>Anime button will go here</button>
        </Link>

      </div>
      <div>
        <Route exact path='/anime' component={Anime}/>
        <Route path='/anime/hunter' component={Hunter}/>
        <Route path='anime/explorer' component={Explorer}/>
        
        {/* <Anime /> */}
      </div>
    </main>
  );
}

export default App;
