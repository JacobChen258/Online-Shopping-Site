import React, {useState} from "react";
import Home from '../css/home.css';
import {Link} from "react-router-dom";
import NavBar from "./NavBar"
import ad_1 from "../img/ad_images/advertisement1.png";
import ad_2 from "../img/ad_images/advertisement2.png";
import promo_1 from "../img/promo_images/gf_masterpiece1.jpg";
import promo_2 from "../img/promo_images/gf_masterpiece2.jpg";
import event_img from "../img/event_images/event.png";

export default function HomePage(){
    let ad_items = [ad_1,ad_2]
    let promo_items = [
        {
            "name":"The Moon",
            "img":promo_1,
            "old_price": 1999,
            "promo_price" : 199,
            "num_reviews" : 100,
            "rating" : 5,
            "description" : "This is a moon in pink sky"
        }
        ,{
            "name":"The Cloud",
            "img":promo_2,
            "old_price": 999,
            "promo_price" : 99,
            "num_reviews" : 100,
            "rating" : 5,
            "description" : "This is a picture of cloud"
        }];
    return (
        <div className={Home.main_container}>
            <NavBar/>
            <div className={Home.container}>
                <div className={Home.ads}>
                    {ad_items.map((item)=>{
                        return (
                            <Link to="/" key={item} className={Home.ad_item}>
                                <img src={item} className={Home.ad_img}></img>
                            </Link>
                        )
                    })}
                </div>
                <div className={Home.promo}>
                {promo_items.map((item)=>{
                    return (
                        <div className={Home.promo_item} key={item.name}>
                            <Link to="/" className={Home.promo_img}>
                                <img src={item.img} className={Home.promo_img}></img>
                            </Link>
                            <div className={Home.promo_info}>
                                <div className={Home.promo_name}>
                                    {item.name}
                                </div>
                                <div>
                                    Origin Price: 
                                    <div className={Home.old_price}>
                                        ${item.old_price}
                                    </div>
                                </div>
                                <div className={Home.new_price}>
                                    Now: ${item.promo_price}
                                </div>
                                <div className={Home.reviews}>
                                    <div>{item.rating}/5 Rating</div>
                                    <div>({item.num_reviews} reviews)</div>
                                </div>
                                <div className={Home.description} name="description">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
                <div className={Home.event}>
                        <Link to="/">
                            <img src={event_img} className={Home.event_img}></img>
                        </Link>
                </div>
            </div>
        </div>
        
    )
}