import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import CSRFToken from './CSRFToken';
import Cookies from 'js-cookie';
import Auth from './Auth.js'
import { Axios } from '../Axios';

export default function Upload() {

    const [redirect, setRedirect] = useState(false)

    const [age, setAge] = useState('')
    const [genre, setGenre] = useState('')
    const [part, setPart] = useState({})
    const [image, setImage] = useState('')
    const [form, setForm] = useState({
        age: '', genre: '', part: '', image: ''
    })

    const doChangeAge = (e) => {
        setAge(e.target.value)
    }
    const doChangeGenre = (e) => {
        setGenre(e.target.value)
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
        setForm({age:age, genre:genre, part:JSON.stringify(part), image:image})
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
            <div class="input-group mb-3">
                <label for="name" className="col-sm-2 col-form-label">写真</label>
                <input type="file" id="image" onChange={doChangeImage} required />
            </div>
            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect01">年齢層</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01" onChange={doChangeAge} required>
                    <option>選択してください</option>
                    <option value="10代以下">10代以下</option>
                    <option value="10代">10代</option>
                    <option value="20代">20代</option>
                    <option value="30代">30代</option>
                    <option value="40代">40代</option>
                    <option value="50代">50代</option>
                    <option value="50代以上">50代以上</option>
                </select>
            </div>

            <div class="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" for="inputGroupSelect02">ジャンル</label>
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
            <fieldset className="form-group">
            <div class="row">
                <legend className="col-form-label col-sm-2 pt-0">募集パート</legend>
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