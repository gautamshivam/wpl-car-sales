import {React, useState} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import './Register.css'


const Register = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = () => {
        Axios.post('/api/auth/register', {
            username: registerUsername,
            password: registerPassword,
            favorites:[],
            purchases:[]
        }, {
            withCredentials: true
        }).then((res) => console.log(res))
    }
    return (
        <div class="register-page">
            <div class="form">
                <form class="Register-form">
                    <input type="text"  class="form-control" placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
                    <input type="text"  class="form-control" placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
                    <button onClick={register}>Create Account</button>
                   
                    <p class="message">Already registered? <Link to="/login">Sign in</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register
