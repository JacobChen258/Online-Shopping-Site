import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS
} from '../../actions/types';

const initialState = {
    isAuthenticated: null,
    username : '',
    first_name : '',
    last_name : '',
    address : '',
}

export function registerReducer(state = initialState,action) {
    const {type,payload} = action;

    switch(type){
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case REGISTER_FAIL:
            return state
        default:
            return state
    }
};

export function loginReducer(state = initialState,action){
    const {type, payload} = action;

    switch(type){
        case LOGIN_SUCCESS:
            return [
                ...state,
                isAuthenticated
            ]
    }
    return state;
}