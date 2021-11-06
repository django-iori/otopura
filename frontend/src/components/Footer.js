import React from 'react';

export default function Footer(props) {

    return(
        <div>
        <footer id="footer" class="border-top bg-white fixed-bottom">
            <nav className="nav nav-pills flex-column flex-sm-row">
                <a className="flex-sm-fill text-sm-center nav-link active border" href="/home">Home</a>
                <a className="flex-sm-fill text-sm-center nav-link active border" href="/">Band</a>
                <a className="flex-sm-fill text-sm-center nav-link active border" href="/mypage">Mypage</a>
            </nav>
        </footer>
        </div>
    )
}