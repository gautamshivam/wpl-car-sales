import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import CarItem from "./CarItem";
import Searchbar from "./Searchbar/Searchbar"
import Filters from "./Filter/Filters";
import Axios from 'axios';

const Cars = (props) => {

  const onFavClick = () => {
    props.onFavoriteUpdated();
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-2 mt-3">
            <Filters/>
        </div>
        <div className="col-md-6">
          <Searchbar/>
          
          <div className="row mt-4">
            {props.cars.map((car) => (
              <div className="col-md-4 p-3">
                <CarItem key={car._id} car={car} onFavClick={onFavClick} onCarClick={props.onCarClick} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Cars;
