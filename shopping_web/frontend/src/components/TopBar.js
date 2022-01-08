import React, {useState} from "react";
import SearchBar from "./SearchBar";
import { Link} from "react-router-dom";
import topBar from '../css/top_bar.css';
import {FaUserCircle} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import UserState from "./UserState";
import General from "../css/general.css";

export default function TopBar(){
    return (
        <header className={topBar.top_bar}>
            <Link to="/" className={topBar.main_logo}>
                <h1 className={[General.logo_font,topBar.logo].join(' ')}>MyShoppingWeb</h1>
            </Link>
            <SearchBar/>
            <UserIcon />
            <ShoppingCart/>
        </header>
    );
}

function UserIcon(){
    if (UserState.userLogin) {
        return (
            <Link to="/user" className={topBar.account_container}>
                <FaUserCircle size ="50px" className={topBar.account_icon}/>
                <div className={topBar.account_text}>Account</div>
            </Link>
        )
    }else{
        return (
            <Link to="/login" className={topBar.account_container}>
                <FaUserCircle size ="50px" className={topBar.account_icon}/>
                <div className={topBar.account_text}>Log in</div>
            </Link>
        )
    }
}

function ShoppingCart(){
    return(
        <Link to="/" className={topBar.shopping_cart}>
            <AiOutlineShoppingCart color="white" size = "70px"/>
        </Link>
    )
}