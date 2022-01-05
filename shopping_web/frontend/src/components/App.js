import React, {useState} from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import UserPage from "./UserPage";
import {BrowserRouter as Router,Routes,Route,Link,Redirect } from'react-router-dom';

export default function App(props){

    return  (
        <Router>
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage/>}></Route>
                <Route exact path="/login" element={<LoginPage/>}></Route>
                <Route exact path="/user" element={<UserPage/>}></Route>
            </Routes>
        </div>
        </Router>
    );
}

const appDiv = document.getElementById("app");
render(<App/>,appDiv);