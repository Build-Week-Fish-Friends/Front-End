import {
    REQUEST_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../actions'

const initialState = {
    state: null,
}

export const reducer = (state = initialState, action ) => {
    switch(action.type){
        case REQUEST_START:
            return{
                ...state
            }
    default:
        return state;
    }
}