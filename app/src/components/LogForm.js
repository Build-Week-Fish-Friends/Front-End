import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import {addEvent} from '../actions'
import '../App.css'


const AddLogForm = (props) => {
    let id = parseInt(localStorage.getItem('id'))
    console.log(id)

    const [createLog, SetCreateLog] = useState({
        location: 'Caspian Sea',
        startTime: '5am',
        species: 'Trout',
        fishCount: '1',
        bait: 'Wooly Bugger'
    })

    const handleSubmit = e => {
        e.preventDefault()
    }
    const handleChange = e => {
        SetCreateLog({
            ...createLog,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>

        <NavBar />
        <div className="log-form">
            <h2>Create a Fishing Log</h2>
            <form onSubmit={handleSubmit} className="log">
                <label>Bait: </label>
                    <input 
                        type="text" 
                        name="bait"
                        placeholder="Dragonfly Nymphy"    
                        value={createLog.bait}
                        onChange={handleChange}
                    />
                    {/* <select className="dropdown" value="" onChange="">
                        <option placeholder='select'>Select</option>
                        <option value='flies'>Flies</option>
                        <option value='naturalBait'>Natural Bait</option>
                        <option value='lures'>Lures</option>
                        <option value='other'>Other</option>
                    </select> */}
                <label>Species: </label>
                    <input onChange={handleChange} text='text' name='species' placeholder='Rainbow Trout, Bass, ect' value={createLog.species}/>
                <label>Location:  </label>
                    <input onChange={handleChange} type="text" name='location' placeholder='Location'  value={createLog.location}/>
                <label>Time of Day: </label>
                <input onChange={handleChange} text='text' name='time' placeholder='6:00 am'  value={createLog.startTime}/>
                <label># of Fish: </label>
                <input onChange={handleChange} text='number' name='fishCount' placeholder='4'  value={createLog.fishCount}/>
                <button type='submit' onClick={() => props.addEvent(createLog, props.history)}>Add Log</button>
            </form>
        </div>

        </>
    )
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps, {addEvent})(withRouter(AddLogForm))