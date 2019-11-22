
import React from 'react'


import '../App.css'

const Navbar = () => {

    return (
        <div className="navBar">
        <h2>FishFriends</h2>
        <nav className="nav">
            <a href="/dashboard">Dashboard</a>
            {/* <a href="#">Map</a> */}
            <a href="/add">New Log </a>
            <a href="/">Logout</a>
        </nav>
        </div>
    )
    }

    export default Navbar