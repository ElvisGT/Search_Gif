import {Card} from './components/Card';

const App= () => {
  return (
    <div className="container">
        <input className="search-bar" type="text" placeholder="search Giphy" />
        <div className="container-cards">
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
        </div>
        
    </div>
  );
}

export default App;
