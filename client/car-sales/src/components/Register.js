import {React, useState} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import './Register.css'
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    //let navigate = useNavigate();


    const register = () => {
        Axios.post('/api/auth/register', {
            username: registerUsername,
            password: registerPassword
        }, {
            withCredentials: true
        }).then((res) =>{ 
            console.log(res)
            if(res.data.username !== undefined) {
                //navigate('/login');  
                setIsError(false);
                setMsg(`Successfully registered, login with username: ${res.data.username}`);

            } else {
                setIsError(true);
                setError(res.data);
            }
        }).catch((err) => console.log('err:',err));
    }
    return (
        <div class="register-page">
            <div class="form">
                <form class="Register-form">
                    <input type="text"  class="form-control" placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
                    <input type="text"  class="form-control" placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
                    <button onClick={register} type="button">Create Account</button>
                    { isError && <p>Error: {error}</p>}
                    { !isError  && <p> {msg}</p>}
                    <p class="message">Already registered? <Link to="/login">Sign in</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register
