import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchLocalLog } from '../actions/'

import '../App.css'

const AreaCard = props => {

    useEffect(() => {
        props.fetchLocalLog()
    }, [])

    console.log(props)

    return (
        <div className="areaDiv">

            { props.locations.map( item => {
                return(

                    // should be area_id ?
                    <div key={item.id} >
                        <h3>{item.name}</h3>           
                        <h3>{item.duration}</h3>
                        <h3>{item.num_catch}</h3>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
       locations: state.locations
    }
}

export default connect(mapStateToProps, {fetchLocalLog})(withRouter(AreaCard))