import React, {useState,useEffect} from "react";
import UserState from "./UserState";
import userPage from "../css/user_page.css";
import {AiFillEdit} from "react-icons/ai";

export default function UserPage(){
    
    const [desEdit,toggleDesEditMode] = useState(false);
    const [infoEdit,toggleInfoEditMode] = useState(false);
    const [paymentEdit, togglePaymentEditMode] = useState(false);
    const handleDesEdit = (e) =>{
        toggleDesEditMode(true);
    }
    const displayDescription = ()=>{
        if (desEdit){
            return <></>
        }else{
            return 
        }
    }
    return (
        <div className={userPage.user_container}>
            <div className={userPage.heading}>
                <form className={userPage.avatar}>
                    <img src="" className={userPage.avatar_img}></img>
                    <input type="file" name="icon_upload" className={userPage.avatar_upload} accept="image/*">
                    </input>
                </form>
                <div className={userPage.welcome}></div>
                <div className={userPage.description}>
                    <div className={userPage.decscription_header}>
                        <button onClick={handleDesEdit}>
                            <AiFillEdit/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={userPage.user_info}></div>
            <div className={userPage.payment}></div>
        </div>
    )
}
function displayDescription(){
    
}
/*
function sellerState(){
    return;
}

function descriptionEdit(){
    return;
}*/