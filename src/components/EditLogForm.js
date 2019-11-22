import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import {editLog} from '../actions'
import '../App.css'


const ChangeLogForm = (props) => {
    let id = parseInt(localStorage.getItem('id'))
    console.log(id)

    const [changeLog, SetchangeLog] = useState({
        species: '',
        fishCount: '',
        bait: ''
    })
    
    const handleSubmit = e => {
        e.preventDefault()
    }
    const handleChange = e => {
        SetchangeLog({
            ...changeLog,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>

        <NavBar />
        <div className="log-form">
            <h2>Update a Fishing Log</h2>
            <form onSubmit={handleSubmit} className="log">
                <label>Bait: </label>
                    <input 
                        type="text" 
                        name="bait"
                        placeholder="Dragonfly Nymphy"    
                        value={changeLog.bait}
                        onChange={handleChange}
                    />
                <label>Species: </label>
                    <input onChange={handleChange} text='text' name='species' placeholder='Rainbow Trout, Bass, ect' value={changeLog.species}/>
                {/* <label>Location:  </label>
                    <input onChange={handleChange} type="text" name='location' placeholder='Location'  value={changeLog.location}/> 
                    area_id (fake id) -- drop down
                    */}
                <label># of Fish: </label>
                <input onChange={handleChange} text='number' name='fishCount' placeholder='4'  value={changeLog.fishCount}/>
                <button type='submit' onClick={() => props.changeLog(changeLog,  props.match.params.id, props.history)}>Update Log</button>
            </form>
        </div>

        </>
    )
}

const mapStateToProps = state => {
    return{
        logList: state.logList
    }
}

export default connect(mapStateToProps, {editLog})(withRouter(ChangeLogForm))