import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { register } from '../actions'
import { connect } from 'react-redux'

import '../App.css'

const Register = (props) => {
    
    const [registerUser, setRegisterUser] = useState({
        // these will be set to blank once AUth is working correctly
        username: 'User10',
        password: 'pword',
    })

    const handleChange = event => {
        setRegisterUser({
            ...registerUser,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("submission")
    }
    return (
        <>
             <h3>Signup</h3>
           <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <br />
                    <input
                         name="name"
                        type="text"
                        value={registerUser.username}
                        placeholder="epicAngler33"
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
                        value={registerUser.password}
                        placeholder="password"
                        onChange={handleChange}
                     />
                </label>
                <br />
                <button type="submit" onClick={() => props.register(registerUser, props.history)}>Signup</button>
            </form> 
        
        </>
    )
}

const mapStateToProps = state => {
    return {
        username: state.username,
        password: state.password,
    }
}

export default connect(mapStateToProps, {register})(withRouter(Register))