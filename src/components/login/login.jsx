import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../imgg/FormsControls/FormControl";
import { required } from "../../utils/validators/validators";
import h from './../login/login.module.css'
import {connect} from "react-redux";
import {login} from '../../redux/auth_reducer'
import { Redirect } from "react-router";

const LoginForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={h.login} validate={[required]} 
                    placeholder={'Email'} name={"email"} component={Input}/>
            </div>
            <div>
                <Field className={h.login} validate={[required]}
                    placeholder={'password'} name={"password"} type={"password"} component={Input}/>
            </div>
            <div className={h.rememberMe}>
                <Field validate={[required]}
                    component={Input} name={"rememberMe"} type={'checkbox'}/>remember me
            </div>
           {props.error && <div className={h.formsummeryerror}>
               {props.error}
            </div>
            }
            <div>
                <button className={h.button}>Login</button>
            </div>
        </form>
     )
}

const LoginReduxForm= reduxForm({ form:'login'})(LoginForm)

const Login=(props)=>{
    const onSubmit=(formData)=>{
       props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return(
            <Redirect to={"/profile"}/>
        )
    }
    return <div className={h.log}>
            <h1 className={h.sighup}>Sigh Up</h1>
            <p className={h.discription}>It's free and always will be</p>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}
const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login);