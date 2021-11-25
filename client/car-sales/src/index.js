import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './components/UserProvider';


ReactDOM.render(<BrowserRouter>
    <UserProvider>
        <App />
    </UserProvider>
    </BrowserRouter>, document.getElementById('root')

<<<<<<< HEAD
=======

ReactDOM.render(<App />, document.getElementById('root')

>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
);
