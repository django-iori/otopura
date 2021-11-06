import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import {Axios} from '../Axios'

export default function Auth() {
    const url = 'http://127.0.0.1:8000/views/authenticated'
    const [redirect_login, SetRedirect_Login] = useState(false);

    useEffect(async() => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'WWW-Authorization': 'Token ' + Cookies.get('token')
            }
        };
        console.log(Cookies.get('token'))
        const res = await Axios.get('views/authenticated/', config);
        console.log(res)
    })

    if (redirect_login) {
        return <Redirect to='/login' />
    }

    return (
        <div>
        </div>
    )
    }