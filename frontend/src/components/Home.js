import React, {useState, useEffect} from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import Header_1 from './Header_1';
import { fontFamily } from '@mui/system';

export default function Home() {
    return(
    <div>
        <body background="http://127.0.0.1:8000/media/S__124207109.jpg">
        <Header_1 />
        <div class="col-lg-12 text-center">
        <p style={{fontFamily: 'fantasy', fontSize: '80px', color: 'white'}}>音プラ</p>
        </div>
            <div className="container">
                <div id="main_visual" className="carousel slide" data-ride="crousel">
                    <ol className="carousel-indicators">
                        <li data-target="#main_visual" data-slide-to='0' className='active'></li>
                        <li data-target="#main_visual" data-slide-to='1'></li>
                        <li data-target='#main_visual' data-slide-to='2'></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className='carousel-item active'>
                            <img className="img-fluid" src="http://127.0.0.1:8000/media/S__124207108.jpg" />
                        </div>
                        <div className='carousel-item'>
                            <img className="img-fluid" src="http://127.0.0.1:8000/media/S__124207109.jpg" />
                        </div>
                        <div className='carousel-item'>
                            <img className="img-fluid" src="http://127.0.0.1:8000/media/S__124207111.jpg" />
                        </div>
                    </div>
                </div>
                    <a className="carousel-control-prev" href="#main_visual" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">前に戻る</span>
                    </a>
                    <a className="carousel-control-next" href="#main_visual" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">次に進む</span>
                    </a>
            </div>
			<div class="container">
				<div class="row">
					<div class="col-lg-12 text-center">
						<div class="section-title">
							<h2><font color="white">音プラとは</font></h2>
						　　<p style={{color: "#f00"}}> <font color="white">
                                音楽好きの人たちが自由につながれるプラットフォームです.<br/>バンドメンバーの募集、音楽イベントの出演バンド募集などの投稿ができます。<br/>
                        また、コメントやDMで気軽にコミュニケーションをとることも可能です。</font>

                        </p>
						</div>
					</div>
				</div>
            </div>
            </body>
        </div>
    )
}