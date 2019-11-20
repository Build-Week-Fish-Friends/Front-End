import React from 'react'
import AddLogForm from './LogForm'

const Dashboard = () => {

    return (
    <div>
        <nav>
            <h4> PrivateRoute - login success</h4>
            <a href="/">Logout</a>
        </nav>

    
            <AddLogForm />
    </div>
    )
}

export default Dashboard