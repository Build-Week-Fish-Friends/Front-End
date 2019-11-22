import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'

// login action creator
export const REQUEST_START = "REQUEST_START"
export const REQUEST_FAILURE = "REQUEST_FAILURE"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const login = (credentials, history) => (dispatch) => {
    dispatch({type: REQUEST_START})
    axiosWithAuth()
        .post('https://fish-friends-resources.herokuapp.com/api/login', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("id", res.data.id)
            dispatch({type: LOGIN_SUCCESS})
            history.push('/dashboard')
        })
        .catch( err => console.log(err))
}

// register action creator
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS' 
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = ( registerUser, history) => (dispatch) => {
    dispatch({ type: REGISTER_START })
    axios
        .post("https://fish-friends-resources.herokuapp.com/api/register", registerUser)
        .then( res => {
            console.log(res)
            dispatch({type: REGISTER_SUCCESS})
            history.push('/login')
        })
        .catch(err => {
            console.log(err)
            dispatch({type: REGISTER_FAILURE})        
        })
}

// new log action creator
export const NEW_LOG_START = "NEW_LOG"
export const NEW_LOG_SUCCESS = "NEW_LOG_SUCCESS"
export const NEW_LOG_FAILURE = "NEW_LOG_FAIL"

export const addEvent = (logData, history) => (dispatch) => {
    dispatch({type: NEW_LOG_START})
    axiosWithAuth()
        .post("https://fish-friends-resources.herokuapp.com/api/logs", logData)
        .then(res => {
            console.log(res)
            dispatch({type: NEW_LOG_SUCCESS})
            history.push('/dashboard')
        })
        .catch(err => {
            console.log(err)
            dispatch({type: NEW_LOG_FAILURE})  
        })
}

// fetch logs action creator
export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"

export const fetchData = () => (dispatch) => {
     dispatch({type: FETCH_START})
     let id = parseInt(localStorage.getItem('id'))
     axiosWithAuth()
     .get(`https://fish-friends-resources.herokuapp.com/api/logs/${id}`)
     .then(res => {
          console.log(res)
          dispatch({type: FETCH_SUCCESS, payload: res.data})
     })
     .catch(error => {
          console.log(error)
          dispatch({ type: FETCH_FAILURE })
     })
}

// edit action for EditLogForm
export const EDIT_START = "EDIT_START"
export const EDIT_FAILURE = "EDIT_FAIL"
export const EDIT_SUCCESS = "EDIT_SUCCESS"

export const editLog = (updateLog , id, history) => (dispatch) => {
    dispatch({type: EDIT_START})
    axiosWithAuth()
        .put(`https://fish-friends-resources.herokuapp.com/api/logs/${id}`, updateLog)
        .then(res => {
            console.log(res)
            dispatch({type: EDIT_SUCCESS})
            history.push('/dashboard')
        })
        .catch(err => {
            console.log(err)
            dispatch({type: EDIT_FAILURE})
        })
}

// delete action (used in LogCard component)
export const DELETE_START = "delete_start"
export const DELETE_SUCCESS = 'delete_complete'

export const deleteEvent = (id, history) => (dispatch) => {
    axiosWithAuth()
        .delete(`https://fish-friends-resources.herokuapp.com/api/logs/${id}`)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETE_SUCCESS})
            history.push('/dashboard')
        })
        .catch(err => {
            console.log(err)
        })
}

// logs by area (called in AreaCard)
export const GLOBAL_LOG_START = "GLOBLE_START"
export const GLOBAL_LOG_SUCCESS = "GLOBAL_SUCCESS"
export const GLOBAL_LOG_FAILURE= "GLOBAL_FAIL"

export const fetchLocalLog = (id) => (dispatch) => {
    dispatch({type: GLOBAL_LOG_START})
    axiosWithAuth()
    .get(`https://fish-friends-resources.herokuapp.com/api/logs/area/${id}`)
    .then(res => {
         console.log(res.data)
         dispatch({ type: GLOBAL_LOG_SUCCESS, payload: res.data })
    })
    .catch(error => {
         console.log(error)
         dispatch({ type: GLOBAL_LOG_FAILURE })
    })
}
