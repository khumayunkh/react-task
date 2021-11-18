import { stopSubmit } from 'redux-form'
import {authAPI} from './../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, 
    payload: {userId, login, email, isAuth}})
export const getAuthUserData=()=>(dispatch)=>{
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {userId, login, email} = response.data.data
            dispatch(setAuthUserData(userId, login, email, true))
        }
});
}
export const login=(email, password, rememberMe)=>(dispatch)=>{
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
        else{
           let messages = response.data.messages.length>0 ?response.data.messages.length[0]: "Some Error";
            dispatch(stopSubmit("login",{_error:messages}))
        }
});
}
export const logout=()=>(dispatch)=>{
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
});
}
export default authReducer;


