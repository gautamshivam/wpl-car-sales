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
  const [filters, setFilters] = useState({makeList:[], bodyTypeList:[], fuelTypeList:[]});
  const [user, setUser] = useState({});

  const [clickedCar, setClickedCar] = useState(null);
  const [clickedCarFav, setClickedCarFav] = useState(false);
  let navigate = useNavigate();

  const { purchases } = useContext(UserContext);
  const [purchaseUpdate, setpurchaseUpdate] = useState(purchases)

  const getCars = () => {
    fetch('/api/cars').then((res) => res.json())
    .then((data) => {
      console.log(data);
      setCars(data);
      setFilters({
        makeList: data.map(item => item.make),
        bodyTypeList: data.map(item => item.bodyType),
        fuelTypeList: data.map(item => item.fuelType),
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const getUser = () => {
    fetch('/api/user').then((res) => res.json())
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
  const onPurchase = () => {
    getCars();
  }

  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/"   element={<Cars cars={cars} filters={filters} onFavoriteUpdated={onFavoriteUpdated} onCarClick={onCarClick}/>} exact></Route>
      <Route path="/login" element={<Login/>} exact></Route>
      <Route path="/register" element={<Register/>} exact></Route>
      <Route path="/browse" element={<Cars cars={cars} filters={filters} onFavoriteUpdated={onFavoriteUpdated} onCarClick={onCarClick}/>} exact></Route>
      <Route path="/user" element={<User/>} exact></Route>
      <Route path="/details" element={<Details car={clickedCar} isFav={clickedCarFav} onPurchase={onPurchase}/>} exact></Route>              
      <Route path="/favourites" element={<Favourites isFavUpdated={isFavUpdated}/>} exact></Route>
      <Route path="/purchases" element={<Purchased/>} exact></Route>
      <Route path="/additem" element={<AddItem/>} exact></Route>
      <Route path="/edititem" element={<EditItem/>} exact></Route>
    </Routes>
</div>
  );
}

export default App;
