import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import CSRFToken from './CSRFToken';
import Cookies from 'js-cookie';
import {Axios} from '../Axios'
import { useCookies } from 'react-cookie';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from '../types';

export default function Login() {
    
    const [postList, setPostList] = useState({
        username:"",
        password:""
    });
    
    const [redirect, setRedirect] = useState(false)

    const [cookies, setCookie] = useCookies(['name']);

    
    const PostClick = () =>{
        console.log(Cookies.get('csrftoken'))
        console.log(document.forms[0].elements[0].value)
        setPostList({
            username: document.forms[0].elements[1].value,
            password: document.forms[0].elements[2].value
    });
    };

    useEffect(async() => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        console.log(Cookies.get('csrftoken'))
        const response = await Axios.post('views/login/', postList, config);
        console.log(response.data)
        if(Object.keys(response.data)[0]=='success') {
            setRedirect(true);
        } else {
            alert((Object.values(response.data)));
        }

        
    },[postList]);
    
    if(redirect){
        return <Redirect to="/" />
    }

    return (
        <div>
            <form>
            <CSRFToken />
            <label for="inputUsername" className="visually-hidden">Username</label>
            <input type="text" id="inputUsername" className="form-control" placeholder="username" name='username_data' required autofocus />
            <label for="inputPassword" className="visually-hidden">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" name='password_data' required />
            <input className="btn btn-primary" value="Enter" onClick={PostClick} />
            </form>
        </div>
    )
}


