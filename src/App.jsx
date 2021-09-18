import React from 'react'
import { Link, Route } from 'react-router-dom'
import Anime from './Components/Anime/Anime';



function App() {
  return (
    <main>
      <header>Header component will go here</header>
      <div>
        {/* <Link to='/anime'> */}
        <button>Anime button will go here</button>
        {/* </Link> */}

      </div>
      <div>
        {/* <Route exact path='/anime' component={Anime}/> */}
        <Anime />
      </div>
    </main>
  );
}

export default App;
