import { Link } from 'react-router-dom'
import Hunter from '../Hunter/Hunter';
import Explorer from '../Explorer/Explorer';
import '../Manga/Manga.css'




function Manga(props) {

    function handleClick(e) {
    console.log(e)
    if (e.target.className === 'hunter') {
      return <Hunter />
    } else if (e.target.className === 'explorer'){
      return <Explorer />
    }
    }

    
    return (
        <section>
          <div className='manga-page'>
            <div className='choose-path'>
              <Link to='/manga/hunter'>
                <button className='hunter' onClick={handleClick} >Hunter</button>
              </Link>
              <Link to='manga/explorer'>
                <button className='explorer' onClick={handleClick}>Explorer</button>
              </Link>
            </div>
          </div>
        </section>
    );
}

export default Manga;