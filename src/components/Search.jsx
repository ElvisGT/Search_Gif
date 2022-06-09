import {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux-toolkit/searchSlice';


export const Search = () => {
    const searchValue = useRef(null);
    const dispatch = useDispatch();

    const handleSearch = () => {
            dispatch(setSearch(searchValue.current.value));
        }

    return (
        <>
            <input className="search-bar" type="text" placeholder="search Giphy" onChange={handleSearch} ref={searchValue}/>
        </>
    )
}
