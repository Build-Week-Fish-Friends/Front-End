import Navbar from "./NavBar"
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchSingleEvent } from '../actions/'

import '../App.css'

const AreaCard = props => {

    let id = props.match.params.id

    useEffect(() => {
        props.fetchSingleEvent(id)
    }, [])

    return (
        <>
            {/* <Navbar /> */}
            { props.locations.map( item => {
                return(
                    <div key={item.area_id} >
                        <h3>{item.name}</h3>           
                        <h3>{item.duration}</h3>
                        <h3>{item.num_catch}</h3>
                    </div>
                )
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
       locations: state.locations
    }
}

export default connect(mapStateToProps, {fetchSingleEvent})(withRouter(AreaCard))