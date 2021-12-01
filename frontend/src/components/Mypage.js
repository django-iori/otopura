import React, {useState, useEffect} from 'react';
import axios from "axios";
import ReactDOM from 'react-dom';
import Profile from './Profile';
import Upload_List from './Upload_list';
import Good_List from './Good_List';
import Cookies from 'js-cookie';
import {Axios} from '../Axios'
import Header_1 from './Header_1'
import Login from './Login';




export default function Mypage() {

    const [profile, setProfile] = useState(true);
    const [good, setGood] = useState(false);
    const [upload, setUpload] = useState(false);

    const doProfile = () => {
        setProfile(true)
        setGood(false)
        setUpload(false)
    }

    const doGood = () => {
        setProfile(false)
        setGood(true)
        setUpload(false)
    }

    const doUpload = () => {
        setProfile(false)
        setGood(false)
        setUpload(true)
    }


    console.log(profile)
    console.log(good)
    console.log(upload)

    function Component () {
        if (profile) {
            return <Profile />;
        } else if  (good) {
            return <Good_List />
        } else if (upload) {
            return <Upload_List />
        }
    }

    return(
        <div>
            <div className='btn btn-primary' onClick={doProfile}>Profile</div>
            <div className='btn btn-primary' onClick={doGood}>Good</div>
            <div className='btn btn-primary' onClick={doUpload}>upload</div>
            <Component />
        </div>

    )
}

