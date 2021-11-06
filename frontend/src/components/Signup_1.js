import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';

export default function Signup_1()  {
    
    const url = 'http://127.0.0.1:8000/rest-auth/registration/'
    const url_1 = 'http://127.0.0.1:8000/rest-auth/login/'
    const [postList, setPostList] = useState({
        username:"",
        email:"",
        password1:"",
        password2:"",
    });
    const [post_1List, setPost_1List] = useState({
        username:"",
        email:"",
        password:"",
    })
    const [getList, setGetList] = useState([]);
    const [redirect, setRedirect] = useState(false)

    const PostClick = () =>{
        setPostList({
                username: document.forms[0].elements[0].value,
                email: document.forms[0].elements[1].value,
                password1: document.forms[0].elements[2].value,
                password2: document.forms[0].elements[2].value,
        });
        setPost_1List({
            username: document.forms[0].elements[0].value,
            email: document.forms[0].elements[1].value,
            password: document.forms[0].elements[2].value,
    });
    };

    useEffect(async() => {
        axios.interceptors.response.use(function (response) {
            // 成功時の処理
            return response;

          }, function (error) {
            // 失敗時の処理
            switch (error.response?.status) {
            case 404:
                console.log('失敗')
                alert('このユーザーは既に登録されています。')
        }
        });
        const response = await axios.post(url, postList, {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
            }
        });

        if(typeof(response)=="undefined"){
            console.log('失敗')
        }else{
            console.log(response)
            setGetList(response.data.data)
            const response_1 = await axios.post(url_1, post_1List, {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT fefege...'
                }
            });
            console.log(response_1)
            setRedirect(true)
        }
        
    },[postList]);

    if(redirect){
        return <Redirect to="/userinfo" />
    }

    return (
        <div>
        <form>
        <label for="inputUsername" className="visually-hidden">Username</label>
        <input type="text" id="inputUsername" className="form-control" placeholder="username" name='username_data' required autofocus />
        <label for="inputEmail" className="visually-hidden">Email</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="email" name='email_data' required />
        <label for="inputPassword" className="visually-hidden">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" name='password_data' required />
        <input className="btn btn-primary" value="Enter" onClick={PostClick} />
        </form>
        </div>
    )
}


