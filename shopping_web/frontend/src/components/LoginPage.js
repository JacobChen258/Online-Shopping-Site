import React, {useState} from "react";
import { Link} from "react-router-dom";
import Login from "../css/log_in.css";
import General from "../css/general.css";

export default function LoginPage(){
    return (
        <div className={Login.login_container}>
            <div className={Login.logo_container}>
                <Link className={Login.login_logo} to="/">
                    <h2 className={[General.logo_font,Login.logo].join(' ')} color="black">MyShoppingWeb</h2>
                </Link>
            </div>
            <form action="/" method="post" className={Login.login_section}>
                <label htmlFor="username" className={Login.login_label}>
                    <p>UserName:</p>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    className={Login.login_input}
                    />
                </label>
                <label htmlFor="password" className={Login.login_label}>
                    <p>Password:</p>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    className={Login.login_input}
                    />
                </label>
                <button id="submit_btn"type="submit" className={Login.login_button}>Login</button>
            </form>
            <p className={Login.register_link}>Don't have an account yet? <Link to="/">Register!</Link></p>
        </div>
    )
}