import { useEffect, useState } from 'react';
import './App.css';
import Cars from './components/Cars';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('/api/cars').then((res) => res.json())
    .then((data) => {
      console.log(data);
      setCars(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <Router>
      <div className="App">
          <Navbar/>
          <h1>Hello from Used Car Sales</h1>
          <Routes>
            <Route path="/login" element={<Login/>} exact></Route>
            <Route path="/register" element={<Register/>} exact></Route>
            <Route path="/browse" element={<Cars cars={cars}/>} exact></Route>
            <Route path="/user" element={<User/>} exact></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
