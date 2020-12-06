import React, { useEffect, useRef, useState } from 'react';


import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const[ state, setState ] = useState();
    const search = useRef();

    useEffect(() => {
        if (search.current) {
            search.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    

    const classes = useStyles();

 

    return (
        <div className={classes.searchWrapper}>
            <input className={classes.searchBar} type='text' placeholder="search memories" ref={search} value={state} onChange={(e) => setState(e.currentTarget.value.toLowerCase())}/>
            <SearchIcon className={classes.searchIcon} />
        </div>
    )

}

export default SearchBar;