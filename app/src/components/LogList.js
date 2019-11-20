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
        <div className='eventDiv'> 
        <div className="eventRowFake">
             <div className="eventCol">
                  <h4>Log Location:</h4>
             </div>
             <div className="eventCol">
                  <h4>Event Description</h4>
             </div>
             <div className="eventCol">
                  <h4>Event Budget</h4>
             </div>
             <div className="eventCol">
                  <h4>Date of Event</h4>
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