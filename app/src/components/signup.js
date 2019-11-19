import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { register } from '../actions'
import { connect } from 'react-redux'

import '../App.css'

const Register = (props) => {
    
    const [registerUser, setRegisterUser] = useState({
        username: '',
        password: '',
    })

    const handleChanges = event => {
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
           <form onSubmit={handleSubmit}>
                <label>
                    Username
                    <input
                        name="name"
                        type="text"
                        value={registerUser.username}
                        placeholder="Elton John"
                        onChange={handleChanges}
                     />
                </label>
                <br />
                <label>
                    password
                    <input
                        name="password"
                        type="password"
                        value={registerUser.password}
                        placeholder="password"
                        onChange={handleChanges}
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