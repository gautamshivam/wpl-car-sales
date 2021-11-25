import React, { useState } from "react";
import CarItem from "./CarItem";
import Searchbar from "./Searchbar/Searchbar"
import Filters from "./Filter/Filters";

const Cars = (props) => {

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }
  const onFavClick = () => {
    props.onFavoriteUpdated();
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-2 mt-3">
            <Filters makeList={props.filters.makeList.filter(onlyUnique)} 
            bodyTypes={props.filters.bodyTypeList.filter(onlyUnique)} 
            fuelTypes={props.filters.fuelTypeList.filter(onlyUnique)}/>
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
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Cars;
