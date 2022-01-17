import React, {useState} from "react";
import { render } from "react-dom";
import HomePage from "./components/Home";
import LoginPage from "./components/Login";
import UserPage from "./components/UserPage";
import TopBar from "./components/TopBar";
import Register from "./components/Register";
import UserState from "./components/UserState";
import {BrowserRouter as Router,Routes,Route} from'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import {Provider} from 'react-redux';
import store from "./reducers/store";

// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.MIDDLE,
    timeout: 0,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

export default function App(){
    const [loginStatus,setLoginStatus] = useState(UserState.userLogin);
    return  (
        <Provider store = {store}>
            <AlertProvider template={AlertTemplate} {...options}>
                <Router>
                    <TopBar/>
                    <Routes>
                        <Route exact path="/" element={<HomePage/>}></Route>
                        <Route exact path="/login" element={<LoginPage/>}></Route>
                        <Route exact path="/user" element={loginStatus? <UserPage/>:<LoginPage/>} />
                        <Route exact path="/register" element={<Register/>}></Route>
                    </Routes>
                </Router>
            </AlertProvider>
        </Provider>
    );
}

const appDiv = document.getElementById("app");
render(<App/>,appDiv);