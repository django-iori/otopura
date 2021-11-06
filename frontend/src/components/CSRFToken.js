import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Axios} from '../Axios'

const CSRFToken = () => {
    const [csrftoken, setcsrftoken] = useState('');

    console.log(csrftoken)

    function getCookie(name) {
        console.log(document.cookie)
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const response = await Axios.get('views/csrf_cookie/');
                console.log("response", response);
                const token = getCookie('csrftoken');
                setcsrftoken(token)
            } catch (err) {
                console.log('csfrエラー', err)
            }
        };
        fetchData();
    }, []);

    return (
        <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken} />
    );
};

export default CSRFToken;