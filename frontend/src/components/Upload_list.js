import React, {useState, useEffect} from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { Axios } from '../Axios';


export default function Upload_List() {

    const [upload_list, setUpload_List] = useState([]);

    const callbackFunction = () => {
        const fetchData = async() => {
            const response = await axios.get('views/upload_list/');
            console.log(response.data)
            setUpload_List(response.data)
        };
        fetchData();
    }


    useEffect(callbackFunction,[]);

    return (
        <div>
        <div className='container'>
        
            {upload_list.map((user) => (
            <div className='card' key={user.id}>
                <div className='card-body'>
                    <h5 className='card-title'><img src={`${user.image}`} className="img-fluid" /></h5>
                    <h5 className='card-title'>名前：{user.name}</h5>
                    <h5 className='card-title'>年代：{user.age}</h5>
                    <h5 className='card-title'>ジャンル：{user.genre}</h5>
                    <h5 className='card-title'>募集パート：{user.part}</h5>
                    <h5 className='card-title'>いいね：{user.good}</h5>
                    <h5 className='card-title'>ID：{user.user}</h5>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}

