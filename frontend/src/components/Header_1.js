import React from 'react';

export default function Header_1() {
    return (
        <div>
            <header>
            <a href="/signup" class='btn btn-primary'>signup</a>
            <a href="/login" class='btn btn-primary'>login</a>
            <a href='/logout' class='btn btn-primary'>logout</a>
            <a href="/upload" class='btn btn-primary'>投稿</a>
            <a href="/mypage" class='btn btn-primary'>Mypage</a>
            </header>
        </div>
    )
}