import {useRef,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setSearch,resetSearch } from '../redux-toolkit/searchSlice';
import {resetLimit} from '../redux-toolkit/limitSlice';


export const Search = () => {
    const searchValue = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(searchValue.length === 0 || searchValue === ''){
            dispatch(resetSearch());
        }
    }, [searchValue])
    

    const handleSearch = () => {
            dispatch(setSearch(searchValue.current.value.toLowerCase()));
            dispatch(dispatch(resetLimit()));
        }

    return (
        <>
            <input className="search-bar" type="text" placeholder="search Giphy" onChange={handleSearch} ref={searchValue}/>
        </>
    )
}
