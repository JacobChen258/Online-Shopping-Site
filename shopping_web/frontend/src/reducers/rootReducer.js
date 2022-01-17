import {combineReducers} from 'redux';
import {registerReducer,loginReducer} from './features/userReducer';

export default combineReducers({
    registerReducer,
    loginReducer,
});