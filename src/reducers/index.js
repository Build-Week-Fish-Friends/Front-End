import {
    REQUEST_START,
    REQUEST_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    NEW_LOG_START,
    NEW_LOG_SUCCESS,
    NEW_LOG_FAILURE,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    GLOBAL_LOG_START,
    GLOBAL_LOG_SUCCESS,
    GLOBAL_LOG_FAILURE,
    EDIT_START,
    EDIT_SUCCESS,
    EDIT_FAILURE,
    DELETE_START,
    DELETE_SUCCESS
} from '../actions'

const initialState = {
   isSubmitting: false,
   isFetching: false,
   isLoggedIn: false,
   isRegistering: false,
   isCreatingLog: false,
   hasCreatedLog: false,
   logList: [
        {location: "Lunar Lake", startTime: "5am", fishCount: "0"}
     ],
   isUpdating:false,
   isDeleted:false,
   locations: [
        {name: "Swamp", duration: "11pm", num_catch: "0"}
     ],
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
         case FETCH_START:
              return {
                    ...state,
              }
          case FETCH_SUCCESS:
              return {
                    ...state,
                    logList: action.payload
              }
          case FETCH_FAILURE:
              return{
                    ...state,
              }
          case GLOBAL_LOG_START:
               return {
                    ...state,
               }
          case GLOBAL_LOG_SUCCESS:
               return {
                    ...state,
                    locations: action.payload
               }
          case GLOBAL_LOG_FAILURE:
               return {
                    ...state,
                    
               }
          case EDIT_START:
               return {
                    ...state,
                    isUpdating: false,
               }
          case EDIT_SUCCESS: 
               return{
                    ...state,
                    isUpdating: true,
               }
          case EDIT_FAILURE:
               return {
                    ...state,
                    isUpdating: false,
               }
          case DELETE_START:
               return {
                    ...state,
                    isDeleted: false
               }
          case DELETE_SUCCESS:
               return {
                    ...state,
                    isDeleted: true
               }

    default:
        return state;
    }
}