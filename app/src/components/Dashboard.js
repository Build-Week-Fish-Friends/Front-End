import React from 'react'


const Dashboard = () => {

    return (

    <div className="navBar">
        <h2>FishFriends</h2>
        <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Map</a>
            <a href="/LogForm">Add Catch</a>
            <a href="/">Logout</a>
        </nav>
    </div>

    )
}

export default Dashboard;