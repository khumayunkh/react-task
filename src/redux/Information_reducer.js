import {usersAPI, profileAPI} from './../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    messages: [
        {Message: 'Hi, how are you?', likes: 33},
        {Message: 'Good, and what about you?', likes: 23},
        {Message: 'Normal, where are you?', likes: 12},
        {Message: 'At home', likes: 40}
    ],
    profile: null,
    status:''
}

const InformationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let NewPost = {
                Message: action.NewPostText,
                likes: 10
            }
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(NewPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case  SET_STATUS: {
            return{...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const AddPostActionCreator = (NewPostText) => ({type: ADD_POST,NewPostText})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch)=>{
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
}

export const getStatus = (userId) => (dispatch)=>{
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    });
}

export const updateStatus = (status) => (dispatch)=>{
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode===0){
            dispatch(setStatus(status))
        }
    });
}

export default InformationReducer;