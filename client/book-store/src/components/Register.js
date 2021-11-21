import {React, useState} from 'react'
import Axios from 'axios'

const Register = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = () => {
        Axios.post('/api/auth/register', {
            username: registerUsername,
            password: registerPassword
        }, {
            withCredentials: true
        }).then((res) => console.log(res))
    }
    return (
        <div>
            <h1>Register:</h1>
            <input placeholder="username" onChange={e => setRegisterUsername(e.target.value)}></input>
            <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)}></input>
            <button onClick={register}>Submit</button>
        </div>
    )
}

export default Register
