
import './Searchbar.css'
import Button from '@mui/material/Button';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
    const ref = React.createRef();
    const onSortApplied = (e) => {
      console.log(e.target.value);
      props.onSortApplied(e.target.value)
    }
    const onQuery = (e) => {
      props.onQuery(ref.current.value);
    }
    return(
        <form class="pt-3">
          <div class="inner-form">
            <div class="input-field second-wrap">
              <input id="search" type="text" ref={ref} placeholder="Search for cars" />
            </div>
            <div class="input-field third-wrap">
            </div>
            <Button variant='contained' onClick={onQuery} type='button' startIcon={<SearchIcon />}>Search</Button>
            <select className="" onChange={onSortApplied}>
                <option value="0">Relevence</option>
                <option value="1">Low to high</option>
                <option value="2">High to low</option>
            </select>
          </div>
        
      </form>
    );
};

export default SearchBar;