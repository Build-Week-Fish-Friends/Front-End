import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import {addEvent} from '../actions'
import '../App.css'

const AddLogForm = (props) => {
    let id = parseInt(localStorage.getItem('id'))
    console.log(id)

    const [createLog, SetCreateLog] = useState({
        location: '',
        startTime: '',
        totalTime: '',
        numFish: '', // should be an integer 
        typeFish: [

        ], // should be an list of types of fish caught
    })

    const handleChange = e => {
        SetCreateLog({
            ...createLogs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

    }

    return (
        // build form here

        <form onSubmit={handleSubmit}> 
            <input
            name="location"
            type="text"
            placeholder="utah"
            value={createLog.location}
            onChange={handleChange}
            />
            
        </form>
    )
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps, {addEvent})(withRouter(AddLogForm))