import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { login } from '../actions'
import { connect } from 'react-redux'

import '../App.css'

const Login = (props) => {
    
    const [loginInfo, setLoginInfo] = useState({
        // these will be set to blank once AUth is working correctly
        username: '',
        password: '',
    })

    const handleChange = e => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <br />
                    <input 
                        name="username"
                        type="text"
                        value={loginInfo.username}
                        placeholder="fishlord11"
                        onChange={handleChange}
                    />
                </label>
                    <br />
                <label>
                    password
                    <br />
                    <input 
                        name="password"
                        type="password"
                        value={loginInfo.password}
                        placeholder="password"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button onClick={() => props.login(loginInfo, props.history)}>Login</button>
            </form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, {login})(withRouter(Login))