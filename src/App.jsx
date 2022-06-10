import {Card} from './components/Card';
import useApi from './hooks/useApi';
import { Search } from './components/Search';
import { useSelector } from 'react-redux';


const App= () => {
  const searchValue = useSelector((state) => state.search.value);
  let API = '';
  
  if(searchValue !== undefined && searchValue.length >= 3){
    API = `https://api.giphy.com/v1/gifs/search?api_key=XewVACHbL6hep8eA8K8V9t3pRAiiHlrX&q=${searchValue}&limit=15`;
  }

  const {imgs} = useApi(API);
  
  return (
    <div className="container">
        <Search />
        <button className="container-list-button" type="button">More</button>

        <div className="container-cards">
          {imgs.data !== undefined 
            ? 
              imgs.data.length > 0 &&
              <>
              <ul className='container-list'>
                {
                  imgs.data.map((img) => (
                    <li key={img.id}><Card linkImg={img.images.downsized.url} alt={img.title}/></li>
                  ))
                }
              </ul>
              </>
            :
              <h1 className='container-empty'>Waiting...</h1>
          }
        </div>
    </div>
  );
}

export default App;
