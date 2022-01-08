import React, {useState} from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import UserPage from "./UserPage";
import TopBar from "./TopBar";
import {BrowserRouter as Router,Routes,Route,Link,Redirect } from'react-router-dom';

export default function App(props){

    return  (
        <Router>
            <TopBar/>
            <Routes>
                <Route exact path="/" element={<HomePage/>}></Route>
                <Route exact path="/login" element={<LoginPage/>}></Route>
                <Route exact path="/user" element={<UserPage/>}></Route>
            </Routes>
        </Router>
    );
}

const appDiv = document.getElementById("app");
render(<App/>,appDiv);