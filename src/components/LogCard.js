  
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
 
import {deleteLog} from '../actions'
function LogCard(props){
    let id = props.match.params.id
    console.log(id)

    // probs need a use effect?
    return (
        <div className="LogRow">
        <div className="LogCol">
             <h4>{props.logList.name}</h4>
        </div>
        <div className="LogCol">
            <h4>{props.logList.species}</h4>
        </div>
        <div className="LogCol">
        <h4>{props.logList.num_catch}</h4>
        </div>
        <div className="LogCol">
        <button className="editBtn" onClick={() => props.history.push(`/edit-event/${id}`)}>Edit</button>
        <button className="deleteBtn" onClick={() => props.deleteLog(id, props.history)}>Delete</button>  
        </div>
</div>

    )
}


const mapStateToProps = state => {
    return {
    
    }
}
export default connect(mapStateToProps, { deleteLog})(withRouter(LogCard))
