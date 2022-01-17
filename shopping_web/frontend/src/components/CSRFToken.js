import React, {useState, useEffect}from 'react';
import Cookies from "js-cookie";
import axios from 'axios';


const CSRFToken = () => {
    const [csrftoken,setToken] = useState("");
    useEffect(() => {
        const fetchData = async ()=>{
            try{
                // by sending this request to csrf_cookie view
                // the header for csrf ensure to generate cookie
                await axios.get(`${process.env.REACT_APP_API_URL}/webapp/csrf_cookie`,{withCredentials: true});
            }catch (err){

            }
        }
        fetchData();
        // then we can just get the cookie
        setToken(Cookies.get('csrftoken'));
    }, [Cookies.get('csrftoken')])
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken || ''} />
    );
};
export default CSRFToken;