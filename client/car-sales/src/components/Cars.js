<<<<<<< HEAD
import React, { useState } from "react";
=======
import * as React from "react";
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import CarItem from "./CarItem";
import Searchbar from "./Searchbar/Searchbar"
import Filters from "./Filter/Filters";
<<<<<<< HEAD
import Axios from 'axios';

const Cars = (props) => {

  const onFavClick = () => {
    props.onFavoriteUpdated();
  }

=======

const Cars = (props) => {
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
  return (
    <div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-2 mt-3">
            <Filters/>
<<<<<<< HEAD
        </div>
        <div className="col-md-6">
          <Searchbar/>
          
          <div className="row mt-4">
            {props.cars.map((car) => (
              <div className="col-md-6 p-3">
                <CarItem key={car._id} car={car} onFavClick={onFavClick} onCarClick={props.onCarClick} />
              </div>
            ))}
          </div>
        </div>
=======
        </div>
        <div className="col-md-6">
          <Searchbar/>
          
          <div className="row mt-4">
            {props.cars.map((car) => (
              <div className="col-md-4 p-3">
                <CarItem key={car._id} car={car} />
              </div>
            ))}
          </div>
        </div>
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Cars;
