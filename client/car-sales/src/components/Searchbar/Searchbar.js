
import './Searchbar.css'
import Button from '@mui/material/Button';
import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
    const [query, setquery] = useState("")
    const ref = React.createRef();
    const onSortApplied = (e) => {
      console.log(e.target.value);
      props.onSortApplied(e.target.value)
    }
    const onQuery = (e) => {
      console.log(e.target.value);
      setquery(e.target.value)
      props.onQuery(e.target.value);
    }
    return(
        <form class="pt-3">
          <div class="row justify-content-center align-items-sm-center">
            <div className="col-md-8">
              <div class="form-control">
                <input className="w-100 no-outline" id="search" type="text" ref={ref} placeholder="Search for cars" onChange={onQuery} value={query} />
              </div>
            </div>
            <div className="col-md-2">
              <Button variant='contained' onClick={onQuery} type='button' startIcon={<SearchIcon />}>Search</Button>
            </div>
            <div className="col-md-2">
              <select className="form-control" onChange={onSortApplied}>
                  <option value="0">Relevence</option>
                  <option value="1">Low to high</option>
                  <option value="2">High to low</option>
              </select>
            </div>
          </div>
      </form>
    );
};

export default SearchBar;