import React, {useState} from "react";
import CarItem from "./CarItem";
import Searchbar from "./Searchbar/Searchbar"
import Filters from "./Filter/Filters";
import { Button, Typography } from "@mui/material";
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const Cars = (props) => {

  const [currPage, setcurrPage] = useState(1);
  const pageSize = 4;

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }
  const onFavClick = () => {
    props.onFavoriteUpdated();
  }

  const onFilterApplied = (filters) => {
    props.onFilterApplied(filters)
    setcurrPage(1);
  }
  const onClearFilter = () => {
    props.onClearFilter();
    setcurrPage(1);
  }
  const onSortApplied = (type) => {
    props.onSortApplied(type);
  }
  const onQuery = (query) => {
    props.onQuery(query)
  }

  const paginate = (array, page_size) =>  {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((currPage-1) * page_size, currPage * page_size);
  }

  const nextPage = () => {
    if(currPage < Math.ceil(props.cars.length/pageSize)) setcurrPage(currPage+1);
  }

  const prevPage = () => {
    if(currPage > 1) setcurrPage(currPage-1);
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-2 mt-3">
            <Filters makeList={props.filters.makeList.filter(onlyUnique)} 
            bodyTypes={props.filters.bodyTypeList.filter(onlyUnique)} 
            fuelTypes={props.filters.fuelTypeList.filter(onlyUnique)}
            onFilterApplied={onFilterApplied} onClearFilter={onClearFilter}/>
        </div>
        <div className="col-md-6"> 
          <Searchbar onSortApplied={onSortApplied} onQuery={onQuery}/>
          {/* <div className="row mt-4 justify-content-center align-items-center">
            <div className="col-md-2">
              <Button variant='contained' 
              onClick={prevPage} 
              startIcon={<ChevronLeftRoundedIcon/>}
              disabled={currPage===1}>
                Prev Page
              </Button>
            </div>
            <div className="col-md-2">
              <Typography fontWeight='bold'>
                Page {currPage} / {Math.ceil(props.cars.length / pageSize)}
              </Typography>
            </div>
            <div className="col-md-2">
              <Button variant='contained' 
              onClick={nextPage} 
              endIcon={<ChevronRightRoundedIcon/>}
              disabled={currPage === Math.ceil(props.cars.length/pageSize)}>
                Next Page
              </Button>
            </div>
          </div> */}
          <div className="row mt-4">
            {paginate(props.cars, pageSize ).map((car) => (
              <div className="col-md-6 p-3">
                <CarItem key={car._id} car={car} onFavClick={onFavClick} onCarClick={props.onCarClick} onCarEditClick={props.onCarEditClick}/>
              </div>
            ))}
          </div>
          {
            Math.ceil(props.cars.length/pageSize) > 0 &&
            <div className="row my-5 justify-content-center align-items-center">
              <div className="col-md-2">
                <Button variant='contained' 
                onClick={prevPage} 
                startIcon={<ChevronLeftRoundedIcon/>}
                disabled={currPage===1}>
                  Prev Page
                </Button>
              </div>
              <div className="col-md-2">
                <Typography fontWeight='bold'>
                  Page {currPage} / {Math.ceil(props.cars.length / pageSize)}
                </Typography>
              </div>
              <div className="col-md-2">
                <Button variant='contained' 
                onClick={nextPage} 
                endIcon={<ChevronRightRoundedIcon/>}
                disabled={currPage === Math.ceil(props.cars.length/pageSize)}>
                  Next Page
                </Button>
              </div>
            </div>
          }
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Cars;
