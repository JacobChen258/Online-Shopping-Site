import React, {useState} from "react";
import { Link} from "react-router-dom";
import login from "../css/login.css";
import General from "../css/general.css";

export default function LoginPage(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const logIn = (e)=>{
        // preventDefault prevent page refresh upon submission
        e.preventDefault();
    }
    return (
        <div className={login.login_container}>
            <div className={login.logo_container}>
                <Link className={login.login_logo} to="/">
                    <h2 className={[General.logo_font,login.logo].join(' ')} color="black">MyShoppingWeb</h2>
                </Link>
            </div>
            <form action="/" method="post" className={login.login_section}>
                <label htmlFor="username" className={login.login_label}>
                    <p>UserName:</p>
                    <input
                    type="text"
                    name="username"
                    value=""
                    onChange={e=>{
                        setUserName(e.target.value)
                    }}
                    className={login.login_input}
                    />
                </label>
                <label htmlFor="password" className={login.login_label}>
                    <p>Password:</p>
                    <input
                    type="password"
                    name="password"
                    value=""
                    onChange={e=>{
                        setPassword(e.target.value)
                    }}
                    className={login.login_input}
                    />
                </label>
                <button type="submit" onClick={console.log(password)} className={login.login_button}>login</button>
            </form>
            <p className={login.register_link}>Don't have an account yet? <Link to="/register">Register!</Link></p>
        </div>
    )
}