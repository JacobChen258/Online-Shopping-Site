import React, {useState} from "react";
import {FaUserCircle} from 'react-icons/fa';

const UserState = {
    userLogin: false,
    userInfo:{
        user_id: 123,
        is_seller:false,
        balance: 0,
        url:null,
        user_name: "Jaocb Chen",
        user_password: "abcd",
        car_path:null,
        user_icon: ()=>{return<FaUserCircle/>}
    }
};

export default UserState;