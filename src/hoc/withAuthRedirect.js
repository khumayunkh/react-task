import React from "react";
import { Redirect } from 'react-router';
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})
const withAuthRedirect=(Component)=>{
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isAuth===false) return <Redirect to='/login'/>
            return <Component{...this.props}/>
        }
    }
    
    let ConnectedAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)
    return RedirectComponent;
}

export default withAuthRedirect