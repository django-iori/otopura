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
import Upload_Band from './Upload_Band';
import Upload_Event from './Upload_Event';




export default function Upload() {

    const [band, setBand] = useState(true);
    const [event, setEvent] = useState(false);

    const doBand = () => {
        setBand(true)
        setEvent(false)
    }

    const doEvent = () => {
        setBand(false)
        setEvent(true)
    }



    function Component () {
        if (band) {
            return <Upload_Band />;
        } else if  (event) {
            return <Upload_Event />
        }
    }

    return(
        <div>
            <div className='btn btn-primary' onClick={doBand}>Band</div>
            <div className='btn btn-primary' onClick={doEvent}>Event</div>
            <Component />
        </div>

    )
}

