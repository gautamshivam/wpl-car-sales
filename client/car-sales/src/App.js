import { useEffect, useState } from 'react';
import './App.css';
import Cars from './components/Cars';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';

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
    <div className="App">
      <h1>Hello from Used Car Sales</h1>
      {/* <Cars books={books}/> */}
      <Login/>
      <Register/>
      <User/>
    </div>
  );
}

export default App;
