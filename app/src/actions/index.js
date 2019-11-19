import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'

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

export const NEW_LOG_START = "NEW_LOG"
export const NEW_LOG_SUCCESS = "NEW_LOG_SUCCESS"
export const NEW_LOG_FAILURE = "NEW_LOG_FAIL"

export const addEvent = (logData, history) => (dispatch) => {
    dispatch({type: NEW_LOG_START})
    axiosWithAuth()
        .post("https://fish-friends-resources.herokuapp.com/api/logs", logData)
        .then(res => {
            dispatch({type: NEW_LOG_SUCCESS})
            history.push('/dashboard')
        })
        .catch(err => {
            console.log(err)
            dispatch({NEW_LOG_FAILURE})  
        })
}