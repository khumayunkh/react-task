import React from "react";
import {AddPostActionCreator} from "../../../redux/Information_reducer";
import MyPosts from "./Myposts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages:state.informationPage.messages,
        newPostText: state.informationPage.newPostText
    }
}
let mapDispatchToPrors = (dispatch) => {
    return {
        addPost: (NewPostText) => {
            dispatch(AddPostActionCreator(NewPostText));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToPrors)(MyPosts);
export default MyPostsContainer;