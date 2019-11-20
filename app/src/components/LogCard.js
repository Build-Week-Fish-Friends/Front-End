import React from 'react'

function Card(props){
    
    return (
        
        <div className="eventRow">
        <div className="eventCol">
             <h4>{props.logList.location}</h4>
        </div>
        <div className="eventCol">
        <h4>{props.logList.startTime}</h4>
        </div>
        <div className="eventCol">
        <h4>{props.logList.fishCount}</h4>
        </div>
        <div className="eventCol">
        <h4>{props.logList.event_date}</h4>
        </div>
</div>

    )
}

export default Card