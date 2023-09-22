import React from "react";

import {
    BrowserRouter as Router, 
    Routes,  
    Route,
    Navigate,

}from "react-router-dom";

import LoginPage  from "./Authpages/LoginPage/Loginpage";
import RegisterPage from "./Authpages/RegisterPage/RegisterPage";

import Alertnotification from "./shared/components/AlertNotification";
import Dashboard from "./Dashboard/dashboard";

import "./App.css"
function App(){

    return<>

        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>           
                <Route exact path="/register" element={<RegisterPage/>}/>   
                <Route exact path="/dashboard" element={<Dashboard/>}/>
                <Route exact path="/dashboard" element={<Navigate to ='/dashboard'/>}/>         
                                            
                
              
                    
                
            </Routes>
        </Router>
        <Alertnotification/>
    </>


    
}
export default App;