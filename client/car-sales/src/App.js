import React, { useEffect, useState } from 'react';
import './App.css';
import Cars from './components/Cars';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import Navbar from './components/Navbar/Navbar'
import Details from './components/Details';
import Favourites from './components/Favourites';
import AddItem from './components/AddItem'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UserProvider from './components/UserProvider';
import { useNavigate } from 'react-router-dom';

function App() {

  const [cars, setCars] = useState([]);
  const [user, setUser] = useState({});

  const [clickedCar, setClickedCar] = useState(null);
  let navigate = useNavigate();

  const getCars = () => {
    fetch('/api/cars').then((res) => res.json())
    .then((data) => {
      console.log(data);
      setCars(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const getUser = () => {
    fetch('/api/user').then((res) => res.json())
    .then((data) => {
      console.log(data);
      if(data.favorites == "" || data.favorites == undefined)data.favorites = [];
      setUser(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const onCarClick = (car) => {
    setClickedCar(car);
    navigate('details')
  }


  useEffect(() => {
    getUser();
    getCars();
  }, []);

  const [isFavUpdated, setisFavUpdated] = useState(true)

  const onFavoriteUpdated = () => {
    console.log("favorite updated", isFavUpdated);
    setisFavUpdated(!isFavUpdated);
    getUser();
  }

  return (
    <UserProvider>
        <div className="App">
            <Navbar/>
            <Routes>
              <Route path="/login" element={<Login/>} exact></Route>
              <Route path="/register" element={<Register/>} exact></Route>
              <Route path="/browse" element={<Cars cars={cars} onFavoriteUpdated={onFavoriteUpdated} onCarClick={onCarClick}/>} exact></Route>
              <Route path="/user" element={<User/>} exact></Route>
              <Route path="/details" element={<Details car={clickedCar}/>} exact></Route>              
              <Route path="/favourites" element={<Favourites isFavUpdated={isFavUpdated}/>} exact></Route>
              <Route path="/additem" element={<AddItem/>} exact></Route>
            </Routes>
        </div>
    </UserProvider>
  );
}

export default App;
