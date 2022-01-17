import React from "react";
import navBar from "../css/nav_bar.css";
import {Link} from "react-router-dom";

export default function NavBar(){
    let categories = [1,2,3,4,5,6,7];
    return (
        <ul className={navBar.category}>
            {categories.map((category)=>{
                return (
                    <Link to="/" key = {category} className={navBar.category_item}>
                        Category {category}
                    </Link>
                )
            })}
        </ul>
    )
}