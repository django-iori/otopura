import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import CSRFToken from './CSRFToken';
import Cookies from 'js-cookie';
import { Axios } from '../Axios';

export default function Logout() {
    
    const [redirect, setRedirect] = useState(false)
    const [redirect_login, setRedirect_login] = useState(false)

    useEffect(async() => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const response = await Axios.post('views/logout/', redirect, config);
        if(Object.keys(response.data)[0]=='success') {
            setRedirect(true);
        } else {
            alert((Object.values(response.data)));
        } 
    },[]);

    if(redirect){
        return <Redirect to="/" />
    }

    return(
        <div>
        </div>
    )
}