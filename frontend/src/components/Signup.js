import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import CSRFToken from './CSRFToken';
import Cookies from 'js-cookie';
import { Axios } from '../Axios';


export default function Signup() {
    
    const [user, setUser] = useState('')
    const [pass_1, setPass_1] = useState('')
    const [pass_2, setPass_2] = useState('')

    const [alert, setAlert] = useState('')
    const [redirect, setRedirect] = useState(false)

    const doUser = (e) => {
        console.log(e.target.value);
        setUser(e.target.value);
    };
    const doPass_1 = (e) => {
        setPass_1(e.target.value)
    };
    const doPass_2 = (e) => {
        setPass_2(e.target.value)
    };

    const doSubmit = async() => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };
        if (pass_1==pass_2) {
            const res = await Axios.post('views/signup/',{
                username: user, password: pass_1
            }, config)
            if (res.data=='success') {
                setRedirect(true)
            }
            else {
                alert (res.data)
            }
        }
        else {
            setAlert('パスワードが一致していません。')
        }
    }




    if(redirect){
        return <Redirect to="/userinfo" />
    }

    return (
        <div>
            <form>
            <label for="inputUsername" className="visually-hidden">Username</label>
            <input type="text" id="inputUsername" className="form-control" placeholder="username" name='username_data' onChange={doUser} required autofocus />
            <label for="inputPassword" className="visually-hidden">Password</label>
            <input type="password" id="inputPassword_1" class="form-control" placeholder="Password" name='password_data' onChange={doPass_1} required />
            <label for="inputPassword" className="visually-hidden">Password</label>
            <input type="password" id="inputPassword_2" class="form-control" placeholder="Password（確認）" name='password_data' onChange={doPass_2} required />
            <input className="btn btn-primary" value="Enter" onClick={doSubmit} />
            </form>
            <div className="alert alert-danger">{alert}</div>
        </div>
    )
}


