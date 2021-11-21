import { useEffect, useState } from 'react';
import './App.css';
import Books from './components/Books';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books').then((res) => res.json())
    .then((data) => {
      console.log(data);
      setBooks(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello from Book Store</h1>
      {/* <Books books={books}/> */}
      <Login/>
      <Register/>
      <User/>
    </div>
  );
}

export default App;
