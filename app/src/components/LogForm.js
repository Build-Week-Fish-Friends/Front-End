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
        species: '',
        fishCount: '',
        bait: ''
    })

    return (
        <div className="log-form">
            <img src='/fishpic.jpg' alt='fish picture' />
            <form className="log">
                    <select className="dropdown" value="" onChange="">
                        <option placeholder='select'>Bait Used</option>
                        <option value='flies'>Flies</option>
                        <option value='naturalBait'>Natural Bait</option>
                        <option value='lures'>Lures</option>
                        <option value='other'>Other</option>
                    </select>
                <input text='text' name='species' placeholder='Species'/>
                <input text='text' name='time' placeholder='Fishing Time'/>
                <input type="text" class='location' placeholder='Location'/>
                <input text='text' name='fishCount' placeholder='Number of Fish'/>
                <button type='submit'>Next</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps, {addEvent})(withRouter(AddLogForm))