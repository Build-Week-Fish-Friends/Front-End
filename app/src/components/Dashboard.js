import React from 'react'
import AddLogForm from './LogForm'

const Dashboard = () => {

    return (
        <div className="navBar">
            <h1>FishFriends</h1>
            <nav className="top">
                <a href="#">Home</a>
                <a href="#">Map</a>
                <a href="/LogForm">Add Catch</a>
                <a href="/">Logout</a>
            </nav>
        </div>
    )
}

export default Dashboard;