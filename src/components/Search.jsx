import React from 'react'
import {useRef} from 'react';


export const Search = () => {
    const searchValue = useRef(null);

    return (
        <>
            <input className="search-bar" type="text" placeholder="search Giphy" ref={searchValue}/>
        </>
    )
}
