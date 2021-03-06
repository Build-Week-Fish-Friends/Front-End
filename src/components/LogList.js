import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchData} from '../actions'
import LogCard from './LogCard'
import { NavLink } from 'react-router-dom';

import '../App.css'

function LogList(props){

    useEffect(() => {
            props.fetchData()
        },[])
    console.log(props)
    return (
        <div className='LogDiv'> 
        <div className="LogRowFake">
             <div className="LogCol">
                  <h4>Bait Used:</h4>
             </div>
             <div className="LogCol">
                  <h4>Species:</h4>
             </div>
             <div className="LogCol">
                  <h4>#Fish Caught: </h4>
             </div>

                   
         </div>
         {
                    props.logList.map(item => {
                        return (
                            <>
                                <NavLink to={`/logs/${item.id}`}>
                                    <LogCard logList={item} key={item.id} />
                                </NavLink>
                            </>
                        )
                        })
                }
         </div>
    )
}

const mapStateToProps = state => {
    return{
        logList: state.logList
    }
}

export default connect(mapStateToProps, {fetchData})(LogList)