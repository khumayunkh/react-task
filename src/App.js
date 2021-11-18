import React from "react"
import './App.css';
import Menu from "./components/Menu/Menu";
import {Route} from "react-router-dom";
import DialogContainer from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";
import InformationContainer from "./components/Information/InformationContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";

const App = () => {
    return (
        <div className='sayt'>
            <HeaderContainer/>
            <Menu/>
            <div className="Menu">
                <Route path='/profile/:userId'
                       render={() =>
                           <InformationContainer/>}/>
                <Route path='/Dialogs'
                       render={() =>
                           <DialogContainer/>}/>
                <Route path='/Users'
                       render={() =>
                           <UsersContainer/>}/>
                <Route path='/login'
                       render={() =>
                           <Login/>}/>
            </div>
        </div>
    )
}

export default App;