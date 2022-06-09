import {Card} from './components/Card';
import useApi from './hooks/useApi';
import { Search } from './components/Search';
import { useSelector } from 'react-redux';


const App= () => {
  const searchValue = useSelector((state) => state.search.value);
  let API = '';
  
  if(searchValue !== undefined && searchValue.length >= 3){
    API = `https://api.giphy.com/v1/gifs/search?api_key=XewVACHbL6hep8eA8K8V9t3pRAiiHlrX&q=${searchValue}`;
  }

  const {imgs} = useApi(API);
  
  return (
    <div className="container">
        <Search />
        <div className="container-cards">
          {imgs.data !== undefined 
            ?
              imgs.data.length > 0 &&
              <ul className='container-list'>
                {
                  imgs.data.map((img) => (
                    <li key={img.id}><Card linkImg={img.url} alt={img.title}/></li>
                  ))
                }
              </ul>
          
            :
              <h1>Empty</h1>
          }
        </div>
        
    </div>
  );
}

export default App;
