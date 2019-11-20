import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchData} from '../actions'
import {NavLink} from 'react-router-dom'
import LogCard from './LogCard'

import '../App.css'

function LogList(props){
    useEffect(() => {
        props.fetchData()
    },[])
    return (
        <div className='LogDiv'> 
        <div className="LogRowFake">
             <div className="LogCol">
                  <h4>Log Location:</h4>
             </div>
             <div className="LogCol">
                  <h4>Log </h4>
             </div>
             <div className="LogCol">
                  <h4>Log Budget</h4>
             </div>
             <div className="LogCol">
                  <h4>Date of Log</h4>
             </div>
         </div>
            {/* {props.logList.map(item => {
                return (
                <NavLink to={`/logs/${item.id}`}>
                    <LogCard logList={item} key={item.id}/>
                </NavLink>
                )
            })} */}
         </div>
    )
}

const mapStateToProps = state => {
    return{
        logList: state.logList
    }
}

export default connect(mapStateToProps, {fetchData})(LogList)