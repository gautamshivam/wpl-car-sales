import React, { useState, useContext } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Login.css'
import { UserContext } from "./UserProvider";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const {setUser, setFav, setPurchases} = useContext(UserContext);

    const [loginUsername, setLogingUsername] = useState("");
    const [loginPassword, setLogingPassword] = useState("");

    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");

    let navigate = useNavigate();

    const getUser = () => {
        Axios.get('/api/user',{
            withCredentials: true
        }).then((res) => {
            setUser(res.data);
            setFav(res.data.favorites);
            setPurchases(res.data.purchases);
            navigate('/browse')
        })
    }

    const onInputChange = () => {
        setIsError(false);
        setError("");

        if(loginUsername === null || loginUsername === "") {
            setIsError(true);
            setError("username is empty");
        }
        if(loginPassword === null || loginPassword === "") {
            setIsError(true);
            setError("password is empty");
            return;
        }
    }

    const login = () => {
        if(loginUsername === null || loginUsername === "") {
            setIsError(true);
            setError("username is empty");
            return;
        }
        Axios.post('/api/auth/login', {
            username: loginUsername,
            password: loginPassword
        }, {
            withCredentials: true
        }).then((res) => {
            if(res.status === 200 && res.data === "successfully authenticated") {
                console.log(res);
                getUser();
            } else {
                setIsError(true);
                setError(res.data);
            }
        }).catch((err) => console.log('error', err.message));
    }
    return (
        <div class="login-page">
            <div class="form">
                <form class="login-form" onChange={onInputChange}>
                    <input type="text" name="title" class="form-control" placeholder="username" required={true} onChange={e => setLogingUsername(e.target.value)}/>
                    <input type="text" name="genre" class="form-control" placeholder="password" required={true} onChange={e => setLogingPassword(e.target.value)}/>
                    <Button onClick={login}>login</Button>
                    { isError && <p>Error: {error}</p>}
                    <p class="message">Not registered? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login
