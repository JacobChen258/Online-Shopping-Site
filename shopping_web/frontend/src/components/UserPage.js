import React, {useState} from "react";
import UserState from "./UserState";
import userPage from "../css/user_page.css";
import {AiFillEdit} from "react-icons/ai";

export default function UserPage(){
    const [desEdit,toggleDesEditMode] = useState(false);
    const [infoEdit,toggleInfoEditMode] = useState(false);
    const [paymentEdit, togglePaymenEditMode] = useState(false);
    return (
        <div className={userPage.user_container}>
            <div className={userPage.heading}>
                <form className={userPage.avatar}>
                    <img src="" className={userPage.avatar_img}></img>
                    <input type="file" name="icon_upload" className={userPage.avatar_upload} accept="image/*">
                        upload avatar
                    </input>
                </form>
                <div className={userPage.welcome}></div>
                <div className={userPage.description}>
                    <div className={userPage.decscription_header}>
                        <sellerState/>
                        <button onClick={toggleDesEditMode(true)}>
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

function sellerState(){
    return;
}

function descriptionEdit(){
    return;
}