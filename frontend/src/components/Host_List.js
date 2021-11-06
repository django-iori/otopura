import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Axios } from '../Axios';
import Header_1 from './Header_1'
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Comment from './Comment';
import { withCookies, Cookies, useCookies } from 'react-cookie';


export default function Host_List() {

    const [bandList, setBandList] = useState([]);
    const [comment, setComment] = useState('')

    
    console.log(Cookies)

    useEffect(() => {
        const fetchData = async() => {
            const response = await Axios.get('api/bandapi/');
            setBandList(response.data);
        };
        fetchData();
    },[]);

    const doGood = async(e) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const res = await Axios.post('views/good/', {user: e.target.value}, config)
    }

    const doComment = (e) => {
        setComment(e.target.value)
    }    

    const doSubmit = async(e) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const response = await Axios.post('views/comment/', {
            user: e.target.value,
            comment: comment
        }, config);
        console.log(response)
        e.preventDefault()
    }

    const doAccount = async(e) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const response = await Axios.post('views/account/', {user: e.target.value}, config);
        console.log(response)
    }

    return (
        <div>
        <Header_1 />
        <div className='container'>
        {bandList.map((user) => (
            <div className='card' key={user.id}>
                <div className='card-body'>
                    <h5 className='card-title'><img src={`${user.image}`} className="img-fluid" /></h5>
                    <h5 className='card-title'>名前：{user.name}</h5>
                    <h5 className='card-title'>年代：{user.age}</h5>
                    <h5 className='card-title'>ジャンル：{user.genre}</h5>
                    <h5 className='card-title'>募集パート：{user.part}</h5>
                    <h5 className='card-title'>いいね：{user.good}</h5>
                    <h5 className='card-title'>ID：{user.user}</h5>
                    <button className="btn btn-primary" onClick={doGood} value={user.user}>いいね！</button>
                    <div className="input-group">
                    <input type="text" id={user.id} className="form-control" placeholder="comment" name='comment_data' onChange={doComment} />
                    <div>
                        <button className="btn btn-secondary" type="submit" onClick={doSubmit} value={user.user}>送信</button>
                    </div>
                    </div>
                    <Comment user={user.user} />
                </div>
                
            </div>
            ))}
        
        </div>
        </div>
    )
}

