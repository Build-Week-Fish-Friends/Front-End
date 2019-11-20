
import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

const Navbar = () => {

    return (
        <div className="navBar">
        <h2>FishFriends</h2>
        <nav className="nav">
            <Link to="/Dashboard">Dashboard</Link>
            {/* <a href="#">Map</a> */}
            <Link to="/add">New Log </Link>
            <Link to="/">Logout</Link>
        </nav>
        </div>
    )
    }

    export default Navbar