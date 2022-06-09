import {Card} from './components/Card';
import useApi from './hooks/useApi';
import { Search } from './components/Search';
import { useSelector } from 'react-redux';


const App= () => {
  const searchValue = useSelector((state) => state.search.value);
  console.log(searchValue)
  const API = `https://api.giphy.com/v1/gifs/search?api_key=XewVACHbL6hep8eA8K8V9t3pRAiiHlrX&q=${searchValue}`;
  const {imgs} = useApi(API);
  
  return (
    <div className="container">
        <Search />
        <div className="container-cards">
          {imgs.length > 0 &&
            <ul className='container-list'>
              <li><Card /></li>
              <li><Card /></li>
              <li><Card /></li>
              <li><Card /></li>
              <li><Card /></li>
              <li><Card /></li>
              <li><Card /></li>
              <li><Card /></li>
              <li><Card /></li>
              <li><Card /></li>
              <li><Card /></li>
              <li><Card /></li>
            </ul>
          }
        </div>
        
    </div>
  );
}

export default App;
