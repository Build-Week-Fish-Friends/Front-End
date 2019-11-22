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
        species: '',
        fishCount: '',
        bait: ''
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
                <label>Species: </label>
                    <input onChange={handleChange} text='text' name='species' placeholder='Rainbow Trout, Bass, ect' value={createLog.species}/>
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