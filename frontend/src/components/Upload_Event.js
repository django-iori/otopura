import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import CSRFToken from './CSRFToken';
import Cookies from 'js-cookie';
import Auth from './Auth.js'
import { Axios } from '../Axios';

export default function Upload_Event() {

    const [redirect, setRedirect] = useState(false)

    const [age, setAge] = useState('')
    const [genre, setGenre] = useState('')
    const [address, setAddress] = useState('')
    const [image, setImage] = useState('')
    const [info, setInfo] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [capa, setCapa] = useState('')
    const [device, setDevice] = useState('')
    const [site, setSite] = useState('')
    const [form, setForm] = useState({
        age: '', genre: '', address: '', image: '', info: '', email: '', tel: '', capa: '', device: '', site: ''
    })

    const doChangeAge = (e) => {
        setAge(e.target.value)
    }
    const doChangeGenre = (e) => {
        setGenre(e.target.value)
    }
    const doChangeAddress = (e) => {
        setAddress(e.target.value);
    }
    const doChangeImage = (e) => {
        const file = document.getElementById('image').files[0];
        if (file !== {}) {
            setImage(file)
            console.log('set')
        }
        else {
            setImage('')
            console.log('hello')
        }
    }
    const doChangeInfo = (e) => {
        setInfo(e.target.value)
    }
    const doChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const doChangeTel = (e) => {
        setTel(e.target.value);
    }
    const doChangeCapa = (e) => {
        setCapa(e.target.value);
    }
    const doChangeDevice = (e) => {
        setDevice(e.target.value);
    }
    const doChangeSite = (e) => {
        setSite(e.target.value)
    }
    const doSubmit = (e) => {
        setForm({age:age, genre:genre, address:address, image:image, info:info, email:email, tel:tel, capa:capa, device:device, site:site})
        e.preventDefault()
    }

    function doTwitter () {
        return(
            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="twitter">URL???Web????????????</label>
                    <input type="url" id="twitter" />
                </div>
            </div>
        )
    }

    useEffect(async() => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const formData = new FormData()
        Object.entries(form).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              value.forEach((v, i) => {
                formData.append(key + '[]', v)  // array????????????????????????????????????
              })
            }
            
            else {
                console.log(key)
                formData.append(key, value)
            }
          })
        console.log(formData.get("part"));
        const response = await Axios.post('views/upload/', formData, config);
        console.log(response.data)
        if (response.data=="success") {
            setRedirect(true)
        } else {
            console.log('fail')
        }
    },[form]);

    if (redirect) {
        return <Redirect to="/" />
    }
    

    return (
        <div>
            <form onSubmit={doSubmit}>
            <div class="input-group mb-3 mt-3">
                <label for="image" className="input-group-text mr-3">??????</label>
                <input type="file" id="image" onChange={doChangeImage} required />
            </div>
            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">?????????</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01" onChange={doChangeAge} required>
                    <option>????????????????????????</option>
                    <option value="10?????????">10?????????</option>
                    <option value="10???">10???</option>
                    <option value="20???">20???</option>
                    <option value="30???">30???</option>
                    <option value="40???">40???</option>
                    <option value="50???">50???</option>
                    <option value="50?????????">50?????????</option>
                </select>
            </div>

            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect02">????????????</label>
                </div>
                <select required class="custom-select" id="inputGroupSelect02" onChange={doChangeGenre}>
                    <option>????????????????????????</option>
                    <option value="?????????">?????????</option>
                    <option value="????????????">????????????</option>
                    <option value="???????????????">???????????????</option>
                    <option value="?????????">?????????</option>
                    <option value="????????????">????????????</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="address">??????</label>
                    <input type="text" id="address" onChange={doChangeAddress} />
                </div>
            </div>
            <div className='input-group mb-3'>
                <div className="input-group-prepend">
                    <label className="input-group-text mr-3" for="inputGroupSelect03">?????????</label>
                </div>
                <div id ="inputGroupSelect03">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">??????</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2">??????</label>
                </div>
                </div>
            </div>
            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="info">?????????????????????</label>
                    <input type="text" id="info" onChange={doChangeInfo} />
                </div>
            </div>
            <div class="input-group mb-3">
                <label for="inputEmail" class="input-group-text">E?????????</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" name="email" placeholder="E?????????" onChange={doChangeEmail} required />
                    <div class="invalid-feedback">????????????????????????</div>
                </div>
            </div>
            <div class="input-group mb-3">
                <label for="inputTel" class="input-group-text">????????????</label>
                <div class="col-sm-10">
                    <input type="tel" class="form-control" name="inputTel" placeholder="????????????" onChange={doChangeTel} required />
                    <div class="invalid-feedback">????????????????????????</div>
                </div>
            </div>
            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="capa">??????????????????</label>
                    <input type="text" id="capa" onChange={doChangeCapa} />
                </div>
            </div>
            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="device">???????????? ????????? ??????</label>
                    <input type="text" id="device" onChange={doChangeDevice} />
                </div>
            </div>
            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="site">URL???Web????????????</label>
                    <input type="url" id="site" onChange={doChangeSite} />
                </div>
            </div>

            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text mr-3" for="sns">SNS</label>
                </div>
                <div class="btn-group btn-group-toggle" id="sns" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                    <input type="radio" name="options" autocomplete="off" onClick={doTwitter} checked /> Twitter
                    </label>
                    <label class="btn btn-secondary">
                    <input type="radio" name="options" autocomplete="off" /> Instagram
                    </label>
                    <label class="btn btn-secondary">
                    <input type="radio" name="options" autocomplete="off" /> Tiktok
                    </label>
                </div>
            </div>
            <doTwitter />
            
            <div>
            <input type="submit" className="btn btn-primary" value="Click" />
            </div>
            </form>
        </div>
    )
}