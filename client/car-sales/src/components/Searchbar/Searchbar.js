
import './Searchbar.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SearchBar = () => {
    return(
        <form class="pt-3">
        <div class="inner-form">
          
          <div class="input-field second-wrap">
            <input id="search" type="text" placeholder="Search for cars" />
          </div>
          <div class="input-field third-wrap">
            <button class="btn-search" type="button">
                Search
            </button>
          </div>
          <select className="">
              <option value="1">Low to high</option>
              <option value="2">High to low</option>
          </select>
        </div>
        
      </form>
    );
};

export default SearchBar;