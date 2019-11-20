import {
    REQUEST_START,
    REQUEST_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    NEW_LOG_START,
    NEW_LOG_SUCCESS,
    NEW_LOG_FAILURE
} from '../actions'

const initialState = {
   isSubmitting: false,
   isFetching: false,
   isLoggedIn: false,
   isRegistering: false,
   isCreatingLog: false,
   hasCreatedLog: false,
   logList: [],
   isUpdating:false,
   isDeleted:false,
   locations: [],
}

export const reducer = (state = initialState, action ) => {
    switch(action.type){
        case REQUEST_START:
            return{
                 ...state,
                 isFetching:true
            }
       case REQUEST_FAILURE: 
            return{
                 ...state,
                 isFetching:false
            }
       case LOGIN_SUCCESS:
            return{
                 ...state,
                 isRegistering: false,
                 isFetching:false,
                 isLoggedIn:true
            }
       case REGISTER_START:
            return{
                 ...state,
                 isRegistering:true, 
                 isSubmitting: false
            }
       case REGISTER_SUCCESS:
            return{
                 ...state,
                 isRegistering: false,
                 isSubmitting: true
            }
       case REGISTER_FAILURE:
            return{
                 ...state,
                 isRegistering: false,
                 isSubmitting: false
            }
        case NEW_LOG_START:
             return {
                  ...state,
                  isFetching: true, 
                  hasCreatedEvent: false,
                  isCreatingEvent: true
             }
        case NEW_LOG_START: 
             return{
                    ...state,
                    isFetching: true,
                    hasCreatedEvent: false,
                    isCreatingEvent: false
             }
        case NEW_LOG_SUCCESS:
             return{
                  ...state,
                  isCreatingLog: false,
                  hasCreatedLog: true,
             }
        case NEW_LOG_FAILURE:
             return {
                  ...state,
                  isCreatingLog: false,
                  hasCreatedLog: false,
                  isFetching: false,
             }

    default:
        return state;
    }
}