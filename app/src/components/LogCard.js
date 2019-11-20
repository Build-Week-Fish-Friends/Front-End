import React from 'react'

function LogCard(props){
    let id = props.match.params.id
    console.log(id)

    // probs need a use effect?
    return (
        <div className="LogRow">
        <div className="LogCol">
             <h4>{props.logList.location}</h4>
        </div>
        <div className="LogCol">
        <h4>{props.logList.startTime}</h4>
        </div>
        <div className="LogCol">
        <h4>{props.logList.fishCount}</h4>
        </div>
        <div className="LogCol">
        <h4>{props.logList.event_date}</h4>
        </div>
        <div className="LogCol">
        <button className="editBtn" onClick={() => props.history.push(`/edit-event/${id}`)}>Edit</button>
        <button className="deleteBtn" onClick={() => props.deleteEvent(id, props.history)}>Delete</button>  
        </div>
</div>

    )
}

export default LogCard