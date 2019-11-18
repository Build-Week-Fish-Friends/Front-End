import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios'

export const REQUEST_START = "REQUEST_START"
export const REQUEST_FAILURE = "REQUEST_FAILURE"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const login = (credentials, history) => (dispatch) => {
    dispatch({type: REQUEST_START})
    axiosWithAuth()
        .post('/register', credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.token)
            // localStorage.setItem("id", res.data.USERID)
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
    axios.post("auth/register", registerUser)
}