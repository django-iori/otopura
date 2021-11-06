import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useParams } from 'react-router';
import Header_1 from './Header_1';
import { Axios } from '../Axios';

export default function Account() {
    const {id} = useParams();

    const [account, setAccount] = useState([])


    useEffect(async() => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const res = await Axios.post('views/account/', {user: id}, config)
        console.log(res)
        setAccount(res.data)
    },[])

    return(
        <div>
        <Header_1 />
        <div class='container'>
            {account.map((user) => (
            <div class='card' key={user.id}>
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