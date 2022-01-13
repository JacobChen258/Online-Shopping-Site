import axios from 'axios';
import Cookies from 'js-cookie';

import { 
    REGISTER_FAIL, REGISTER_SUCCESS,
    LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT_SUCCESS, LOGOUT_FAIL,
    DELETE_SUCCESS, DELETE_FAIL} from './types';

export const register = (username,password,re_password,address) => async dispatch =>{
    const config = {
        headers:{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'X-CSRFToken' : Cookies.get('csrftoken'),
            'withCredentials': true
        }
    };

    const body = JSON.stringify({username,password,re_password,address});

    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/webapp/register`,body,config);
        if (res.data.error){
            dispatch({
                type: REGISTER_FAIL
            })
        }else{
            dispatch({
                type: REGISTER_SUCCESS
            })
        }
    }catch (err) {
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

export const login = (username,password) => async dispatch =>{
    const config = {
        headers:{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'X-CSRFToken' : Cookies.get('csrftoken'),
            'withCredentials': true
        }
    };

    const body = JSON.stringify({username,password});

    try{
        const res = await axios.post(`${process.env.development.REACT_APP_API_URL}/webapp/login`,body,config);
        if (res.data.error){
            dispatch({
                type: LOGIN_FAIL
            })
        }else{
            dispatch({
                type: LOGIN_SUCCESS
            })
        }
    }catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
}
