import {Card} from './components/Card';
import useApi from './hooks/useApi';
import { Search } from './components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { addMore } from './redux-toolkit/limitSlice';


const App= () => {
  const searchValue = useSelector((state) => state.search.value);
  const limitValue = useSelector((state)=> state.limit.value)
  const dispatch = useDispatch();
  let API = '';
  
  if(searchValue !== null && searchValue.length >= 3){
    API = `https://api.giphy.com/v1/gifs/search?api_key=XewVACHbL6hep8eA8K8V9t3pRAiiHlrX&q=${searchValue}&limit=${limitValue}`;
  }

  const {imgs} = useApi(API);

  const handleClick = () => {
    dispatch(addMore());
  }
  
  return (
    <div className="container">
        <Search />

        <div className="container-cards">
          {imgs.data !== undefined && searchValue !== null
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
                <div className='container-list-button'>
                  <button className="container-list-button-item" type="button" onClick={handleClick}>More</button>
                </div>
              </>
            :
              <h1 className='container-empty'>Waiting...</h1>
          }
        </div>
    </div>
  );
}

export default App;
