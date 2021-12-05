import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import Cars from './components/Cars';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import Navbar from './components/Navbar/Navbar'
import Details from './components/Details';
import Favourites from './components/Favourites';
import AddItem from './components/AddItem'
import EditItem from './components/EditItem'
import {Route, Routes} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Purchased from './components/Purchased';
import { UserContext } from "./components/UserProvider";

function App() {

  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [unSortedCars, setUnSortedCars] = useState([]);
  const [filters, setFilters] = useState({makeList:[], bodyTypeList:[], fuelTypeList:[]});
  const [lastAppliedFilters, setLastAppliedFilters] = useState({make:"", body:"", fuelTypes:[]});
  const [lastQuery, setLastQuery] = useState("");
  const [user, setUser] = useState({});

  const [clickedCar, setClickedCar] = useState(null);
  const [clickedCarFav, setClickedCarFav] = useState(false);
  let navigate = useNavigate();

  const { purchases } = useContext(UserContext);
  const [purchaseUpdate, setpurchaseUpdate] = useState(purchases)

  const getCars = () => {
    fetch(`/api/cars`).then((res) => res.json())
    .then((data) => {
      console.log(data);
      setCars(data);
      setFilteredCars(data);
      setFilters({
        makeList: data.map(item => item.make).filter((item) => item !== ""),
        bodyTypeList: data.map(item => item.bodyType).filter((item) => item !== ""),
        fuelTypeList: data.map(item => item.fuelType).filter((item) => item !== ""),
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const getUser = () => {
    fetch(`/api/user`).then((res) => res.json())
    .then((data) => {
      console.log(data);
      if(data.favorites === "" || data.favorites === undefined)data.favorites = [];
      setUser(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const onCarClick = (car, isFavorite) => {
    setClickedCar(car);
    setClickedCarFav(isFavorite);
    navigate('details')
  }
  const onCarEditClick = (car) => {
    setClickedCar(car);
    navigate('edititem')
  }


  useEffect(() => {
    getUser();
    getCars();
  }, [purchaseUpdate]);

  const [isFavUpdated, setisFavUpdated] = useState(true)

  const onFavoriteUpdated = () => {
    console.log("favorite updated", isFavUpdated);
    setisFavUpdated(!isFavUpdated);
    getUser();
  }

  const onFilterApplied = (selctedFilters, isQuery) => {
    console.log('filters apply', selctedFilters);
    setLastAppliedFilters(selctedFilters);
    
    let filteredList = cars;
    if(selctedFilters.make != "")filteredList = cars.filter((car) => car.make === selctedFilters.make);
    if(selctedFilters.body != "")filteredList = filteredList.filter((car) => car.bodyType === selctedFilters.body);
    if(Array.isArray(selctedFilters.fuelTypes) && selctedFilters.fuelTypes.length > 0)filteredList = filteredList.filter((car) => selctedFilters.fuelTypes.includes(car.fuelType));
    if(isQuery)filteredList = filteredList.filter((car) => car.title.toLowerCase().includes(lastQuery.toLowerCase()));
    setFilteredCars(filteredList);
    return filteredList;
  }
  const onClearFilter = () => {
    setFilteredCars(cars);
    setLastAppliedFilters({make:"", body:"", fuelTypes:[]})
  }

  const onSortApplied = (type) => {
    console.log('sorting type:',type);
    switch(type) {
      case "0": setFilteredCars(unSortedCars);break;
      case "1": {
        let sortedList = [...filteredCars].sort((a,b) => parseInt(a.price) > parseInt(b.price) ? 1 : -1 );
        console.log(sortedList);
        setUnSortedCars(filteredCars);
        setFilteredCars(sortedList);
        break;
      }
      case "2": {
        let sortedList = [...filteredCars].sort((a,b) => parseInt(a.price) < parseInt(b.price) ? 1 : -1);
        console.log(sortedList);
        setUnSortedCars(filteredCars);
        setFilteredCars(sortedList);
        break;
      }
      default: setFilteredCars(unSortedCars);break;
    }
  }
  const onQuery = (query) => {
    console.log('search by title:',query);
    setLastQuery(query);
    let filteredList = onFilterApplied(lastAppliedFilters, false);
    filteredList = filteredList.filter((car) => car.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredCars(filteredList)
    console.log(filteredList)
    return filteredList;
  }

  const onPurchase = () => {
    getCars();
  }


  const onUpdated = () => {
    getCars();
  }
  
  const onAdded = () => {
    getCars();
  }

  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/"   element={
      <Cars cars={filteredCars} 
      onQuery={onQuery}
      onSortApplied={onSortApplied} 
      onClearFilter={onClearFilter} 
      filters={filters} 
      onFilterApplied={onFilterApplied} 
      onFavoriteUpdated={onFavoriteUpdated} 
      onCarClick={onCarClick} 
      onCarEditClick={onCarEditClick}/>} exact></Route>

      <Route path="/login" element={<Login/>} exact></Route>

      <Route path="/register" element={<Register/>} exact></Route>
      
      <Route path="/browse" element={
      <Cars cars={filteredCars} 
      onQuery={onQuery}
      onSortApplied={onSortApplied}  
      onClearFilter={onClearFilter} 
      filters={filters} 
      onFilterApplied={onFilterApplied} 
      onFavoriteUpdated={onFavoriteUpdated} 
      onCarClick={onCarClick} 
      onCarEditClick={onCarEditClick}/>} exact></Route>

      <Route path="/user" element={<User/>} exact></Route>
      <Route path="/details" element={<Details car={clickedCar} isFav={clickedCarFav} onPurchase={onPurchase}/>} exact></Route>              
      <Route path="/favourites" element={<Favourites onCarClick={onCarClick} isFavUpdated={isFavUpdated}/>} exact></Route>
      <Route path="/purchases" element={<Purchased/>} exact></Route>
      <Route path="/additem" element={<AddItem  onAdded={onAdded}/>} exact></Route>
      <Route path="/edititem" element={<EditItem car={clickedCar} onUpdated={onUpdated}/>} exact></Route>
    </Routes>
</div>
  );
}

export default App;
