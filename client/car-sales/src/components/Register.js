import {React, useState} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';


const Register = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    //let navigate = useNavigate();


    const onFormChange = () => {
        setIsError(false);
        setMsg("")
    }
    const register = () => {
        Axios.post(`/api/auth/register`, {
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
                <Typography marginTop='25px' marginBottom='50px'>
                    <ElectricCarIcon style={{color:'#4CAF50', fontSize:'80px'}}/>
                    <p style={{color:'#4CAF50',fontWeight:'bold',fontSize:'20px'}}>CAR BAZAAR</p>
                </Typography>
                <form class="Register-form" onChange={onFormChange}>
                    <input type="text"  class="form-control" placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
                    <input type="password"  class="form-control" placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
                    <Button onClick={register} 
                    type="button" variant='contained' 
                    startIcon={<PersonAddAltIcon/>}
                    disabled={isError}>Create Account</Button>
                    { isError && <Typography marginTop='25px' color='red' fontWeight='bold'>Error: {error}</Typography>}
                    { !isError  && <p> {msg}</p>}
                    <p class="message">Already registered? <Link to="/login">Sign in</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register
