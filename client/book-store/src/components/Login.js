import React, { useState } from 'react'
import Axios from 'axios'

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
        <div>
            <h1>Login:</h1>
            <input placeholder="username" onChange={e => setLogingUsername(e.target.value)}></input>
            <input placeholder="password" onChange={e => setLogingPassword(e.target.value)}></input>
            <button onClick={login}>Submit</button>
        </div>
    )
}

export default Login
