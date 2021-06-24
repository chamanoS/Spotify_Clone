import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'


function Login() {
    return (
        <div className="login">
            
            <img src="http://cdn.shopify.com/s/files/1/0129/7698/0032/articles/Music-On-Spotify-Yoast_1200x1200.jpg?v=1552056915" alt=""/>
            
            <a href={loginUrl} >LOGIN WITH SPOTIFY</a>
        
        </div>
    )
}

export default Login
