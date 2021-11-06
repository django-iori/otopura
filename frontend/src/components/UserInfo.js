import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import CSRFToken from './CSRFToken';
import Cookies from 'js-cookie';
import Auth from './Auth.js'
import { Axios } from '../Axios';

export default function UserInfo() {

    const [redirect, setRedirect] = useState(false)

    const [age, setAge] = useState(0)
    const [genre, setGenre] = useState('')
    const [address, setAddress] = useState('')
    const [artist, setArtist] = useState('')
    const [part, setPart] = useState({})
    const [image, setImage] = useState('')
    const [form, setForm] = useState({
        age: '', genre: '', address: '', artist: '', part: '', image: ''
    })

    const doChangeAge = (e) => {
        setAge(e.target.value)
    }
    const doChangeGenre = (e) => {
        setGenre(e.target.value)
    }
    const doChangeAddress = (e) => {
        setAddress(e.target.value)
    }
    const doChangeArtist = (e) => {
        setArtist(e.target.value)
    }
    const doChangePart = (e) => {
        setPart({ ...part, [e.target.value]: e.target.checked });
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

    const doSubmit = (e) => {
        setForm({age:age, genre:genre, address:address, artist:artist, part:JSON.stringify(part), image:image})
        e.preventDefault()
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
                formData.append(key + '[]', v)  // arrayデータを分割して入れ直す
              })
            }
            
            else {
                console.log(value)
                formData.append(key, value)
            }
          })
        console.log(formData.get("age"));
        const response = await Axios.post('views/userinfo/', formData, config);
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
            <div class="input-group mb-3">
                <label for="name" className="col-sm-2 col-form-label">写真</label>
                <input type="file" id="image" onChange={doChangeImage} required />
            </div>
            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="age">年齢</label>
                    <input type="number" id="age" onChange={doChangeAge} required />
                </div>
            </div>

            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect02">好きなジャンル</label>
                </div>
                <select required class="custom-select" id="inputGroupSelect02" onChange={doChangeGenre}>
                    <option>選択してください</option>
                    <option value="ロック">ロック</option>
                    <option value="ポップス">ポップス</option>
                    <option value="クラシック">クラシック</option>
                    <option value="ジャズ">ジャズ</option>
                    <option value="アニソン">アニソン</option>
                </select>
            </div>

            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="address">お住まい</label>
                    <input type="text" id="address" onChange={doChangeAddress} />
                </div>
            </div>

            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="artist">好きなアーティスト</label>
                    <input type="text" id="artist" onChange={doChangeArtist} />
                </div>
            </div>

            <fieldset className="form-group">
            <div class="row">
                <legend className="col-form-label col-sm-2 pt-0">パート</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="part" id="part1" value="ギター" onChange={doChangePart} />
                        <label className="form-chack-label" for="part1">ギター</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="part" id="part2" value="ベース" onChange={doChangePart} />
                        <label className="form-chack-label" for="part2">ベース</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="part" id="part3" value="ドラム" onChange={doChangePart} />
                        <label className="form-chack-label" for="part3">ドラム</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="part" id="part4" value="ボーカル" onChange={doChangePart} />
                        <label className="form-chack-label" for="part4">ボーカル</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="part" id="part5" value="キーボード" onChange={doChangePart} />
                        <label className="form-chack-label" for="part5">キーボード</label>
                    </div>
                </div>
            </div>
            </fieldset>
            <input type="submit" className="btn btn-primary" value="Click" />
            </form>
        </div>
    )
}