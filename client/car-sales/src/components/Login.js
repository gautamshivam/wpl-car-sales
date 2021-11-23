import React, { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Login.css'


const Login = () => {

    const [loginUsername, setLogingUsername] = useState("");
    const [loginPassword, setLogingPassword] = useState("");
    const login = () => {
        Axios.post('/api/auth/login', {
            username: loginUsername,
            password: loginPassword
        }, {
            withCredentials: true
        }).then((res) => console.log(res))
    }
    return (
        <div class="login-page">
            <div class="form">
                <form class="login-form">
                    <input type="text" name="title" class="form-control" placeholder="username" onChange={e => setLogingUsername(e.target.value)}/>
                    <input type="text" name="genre" class="form-control" placeholder="password" onChange={e => setLogingPassword(e.target.value)}/>
                    <button onClick={login}>login</button>
                    <p class="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login
