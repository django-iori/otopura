import { useState, useEffect } from "react";
import { Axios } from "../Axios";
import Cookies from "js-cookie";

export default function Profile () {
    const [mydataList, setMydataList] = useState([]);

    const callbackFunction = () => {
        const fetchData = async() => {
            const response = await Axios.get('views/mypageapi/', {
                'headers': {
                    'X-CSRFToken': Cookies.get('csrftoken')
                }
            });
            console.log(response.data)
            setMydataList(response.data)
        };
        fetchData();
    }
    useEffect(callbackFunction,[]);
    
    return(
        <div>
        {mydataList.map((user) => (
            <div class='card' key={user.id}>
                <h5 className='card-title'><img src={`${user.image}`} className="img-fluid" /></h5>
                <div class='card-body'>
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
    ) 
}