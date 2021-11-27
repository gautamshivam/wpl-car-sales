import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './components/UserProvider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { GlobalStyles } from '@mui/styled-engine';


const theme = createTheme({
    palette: {
        primary: {
          main: '#4CAF50',
          contrastText: "#fff"
        },
        secondary: {
          main: green[500],
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        button: {
          fontWeight: 'bold',
        },
        
    }
});

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyles styles={{ link: { color: 'green' } }}>
                </GlobalStyles>
                <App />
            </ThemeProvider> 
        </UserProvider>
    </BrowserRouter>
   , document.getElementById('root')

);
