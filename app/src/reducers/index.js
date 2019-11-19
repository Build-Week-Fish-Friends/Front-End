import {
    REQUEST_START,
    REQUEST_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../actions'

const initialState = {
   isSubmitting: false,
   isFetching: false,
   isLoggedIn: false,
   isRegistering: false,

}

export const reducer = (state = initialState, action ) => {
    switch(action.type){
        case REQUEST_START:
            return{
                ...state,
                isFetching: true,
            }
        case REQUEST_FAILURE:
            return{
                ...state,
                isFetching: false,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isRegistering: false,
                isSubmitting: false,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                isSubmitting: true,
            }
        case REGISTER_START:
            return{
                ...state,
                isSubmitting: false,
                isRegistering: true,
                    }   

        case LOGIN_SUCCESS:
            return{
                ...state,
                isRegistering: false,
                isFetching: false,
                isLoggedIn: true,
                }
    default:
        return state;
    }
}