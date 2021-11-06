import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Host_List from './components/Host_List'
import Header from './components/Header_1'
import Footer from './components/Footer'
import Mypage from './components/Mypage'
import Signup from './components/Signup'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Upload from './components/Upload.js'
import UserInfo from './components/UserInfo';
import Auth from './components/Auth.js'
import Upload_List from './components/Upload_list';
import Good_List from './components/Good_List';
import Account from './components/Account';
import Home from './components/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom"


function App(props) {

    return (
        <Router>
                <Route exact path='/' component={Host_List} />            
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/userinfo' component={UserInfo} />
                <Route exact path='/mypage' component={Mypage} />
                <Route exact path='/upload_list' component={Upload_List} /> 
                <Route exact path='/good_list' component={Good_List} /> 
                <Route exact path='/login' component={Login} />
                <Route exact path='/logout' component={Logout} />
                <Route exact path='/upload' component={Upload} />
                <Route exact path='/auth' component={Auth} />
                <Route exact path='/account/:id' component={Account} />
                <Route exact path='/home' component={Home} />
            <Footer mypage={props.user} />
        </Router>
    )
}

export default App

