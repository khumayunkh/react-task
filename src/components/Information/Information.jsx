import React from 'react'
import h from './Information.module.css';
import MyPostsContainer from "./Myposts/MypostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{
    return(
        <div className={h.food2}>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
        </div>
    )
}

export default Profile;