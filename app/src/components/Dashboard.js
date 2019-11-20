import React from 'react'

import NavBar from './NavBar'
import LogList from './LogList'
import AreaCard from './AreaCard'
const Dashboard = (props) => {

    return (

    <div>
            <NavBar />
        <div>
            {/* renders LogList */}
           <LogList />
        </div>
        <div>
            <AreaCard />
        </div>
    </div>

    )
}

export default Dashboard