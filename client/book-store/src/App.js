import { useEffect, useState } from 'react';
import './App.css';
import Books from './components/Books';

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
      Hello from Book Store
      <Books books={books}/>
    </div>
  );
}

export default App;
