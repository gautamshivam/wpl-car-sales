import React, { useState, useContext } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Login.css'
import { UserContext } from "./UserProvider";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const {setUser, setFav} = useContext(UserContext);

    const [loginUsername, setLogingUsername] = useState("");
    const [loginPassword, setLogingPassword] = useState("");

    let navigate = useNavigate();

    const getUser = () => {
        Axios.get('/api/user',{
            withCredentials: true
        }).then((res) => {
            setUser(res.data);
            setFav(res.data.favorites);
            setFav(res.data.purchases);
            navigate('/browse')
        })
    }

    const login = () => {
        Axios.post('/api/auth/login', {
            username: loginUsername,
            password: loginPassword
        }, {
            withCredentials: true
        }).then((res) => {
            getUser();
        })
    }
    return (
        <div class="login-page">
            <div class="form">
                <form class="login-form">
                    <input type="text" name="title" class="form-control" placeholder="username" onChange={e => setLogingUsername(e.target.value)}/>
                    <input type="text" name="genre" class="form-control" placeholder="password" onChange={e => setLogingPassword(e.target.value)}/>
                    <Button onClick={login}>login</Button>
                    <p class="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login
