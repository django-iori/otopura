import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Cookies from 'js-cookie';
import PersonIcon from '@mui/icons-material/Person';
import { Axios } from '../Axios';
export default function Comment(props) {

    const [comment, setComment] = useState([])


    useEffect(() => {
        const fetchData = async() => {
            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': Cookies.get('csrftoken')
                }
            };
            const response = await Axios.post('views/comment_list/', {user: props.user}, config);
            setComment(response.data);
            console.log(response.data)
        };
        fetchData();
    },[]);

    return(
        <div>
            <DropdownButton id="dropdown-item-button" title="コメントを見る">
                    {comment.map((item) => (
                        <Dropdown.ItemText><a href={`/account/${item.cm_user}`}><PersonIcon /></a>{item.comment}</Dropdown.ItemText>
                        
                    ))}
            </DropdownButton>
        </div>
    )
}