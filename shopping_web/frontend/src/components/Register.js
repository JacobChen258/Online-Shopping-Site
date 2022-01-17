import React, {useState} from "react";
import login from "../css/login.css";
import {Link, Navigate} from "react-router-dom";
import general from "../css/general.css";
import Cookies from "js-cookie";
import CSRFToken from './CSRFToken';
import {types} from "react-alert";
import { useAlert} from 'react-alert';
import {register} from '../actions/auth';
import {connect} from 'react-redux';

const Register = ({register}) => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        re_password: '',
        address : ''
    });

    const [registerSuccuss,setRegisterSuccuss] = useState(false);

    const {username,password,re_password,address} = userData;

    const alert = useAlert();

    const onChange = e => setUserData({
        ...userData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e =>{
        e.preventDefault();

        if (password === re_password){
            console.log("hey")
            alert.show("register shoukd success")
            register(username,password,re_password,address);
            setRegisterSuccuss(true);
        }else{
            setUserData({
                ...userData,
                password: '',
                re_password: ''
            });
            alert.show("Password does not match",{
                type : types.ERROR
            });
        }
        /*
        if (registerSuccuss){
            return <Navigate to='/'/>
        }*/
    }


    return (
        <div className={login.login_container}>
            <div className={login.logo_container}>
                <Link className={login.login_logo} to="/">
                    <h2 className={[general.logo_font,login.logo].join(' ')} color="black">MyShoppingWeb</h2>
                </Link>
            </div>
            <form action="/" method="post" onSubmit = {e => onSubmit(e)} className={login.login_section}>
                <CSRFToken/>
                <h1 className={[general.logo_font,login.register].join(' ')}>Register</h1>
                <label htmlFor="username" className={login.login_label}>
                    <p>* UserName:</p>
                    <input
                    type="text"
                    name="username"
                    required={true}
                    value = {username}
                    onChange = {e=>onChange(e)}
                    className={[login.login_input,login.required].join(' ')}
                    />
                </label>
                <label htmlFor="password" className={login.login_label}>
                    <p>* Password:</p>
                    <input
                    type="password"
                    name="password"
                    required={true}
                    value = {password}
                    onChange = {e=>onChange(e)}
                    minLength = '8'
                    className={[login.login_input,login.required].join(' ')}
                    />
                </label>
                <label htmlFor="re_password" className={login.login_label}>
                    <p>* Confirm Password:</p>
                    <input
                    type="password"
                    name="re_password"
                    required={true}
                    value = {re_password}
                    onChange = {e=>onChange(e)}
                    minLength = '8'
                    className={[login.login_input,login.required].join(' ')}
                    />
                </label>
                <label htmlFor="address" className={login.login_label}>
                    <p>  Address:</p>
                    <input
                    type="address"
                    name="address"
                    value = {address}
                    onChange = {e=>onChange(e)}
                    className={login.login_input}
                    />
                </label>
                <button type="submit" className={login.login_button}>register</button>
            </form>
        </div>
    )
}

export default connect(null, {register})(Register);