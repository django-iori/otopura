import React, {useState, useEffect} from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { Axios } from '../Axios';

export default function Good_List() {

    const [good_list, setGood_List] = useState([]);

    const callbackFunction = () => {
        const fetchData = async() => {
            const response = await Axios.get('views/good_list/');
            console.log(response.data)
            setGood_List(response.data)
        };
        fetchData();
    }


    useEffect(callbackFunction,[]);

    return (
        <div>
        <div className='container'>
        
            {good_list.map((user) => (
            <div className='card' key={user.id}>
                <div class='card-body'>
                <h5 className='card-title'><img src={`${user.image}`} className="img-fluid" /></h5>
                    <h5 class='card-title'>名前：{user.name}</h5>
                    <h5 class='card-title'>年齢:{user.age}</h5>
                    <h5 class='card-title'>好きなジャンル：{user.genre}</h5>
                    <h5 class='card-title'>好きなアーティスト:{user.artist}</h5>
                    <h5 class='card-title'>住所:{user.address}</h5>
                    <h5 class='card-title'>パート:{user.part}</h5>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}