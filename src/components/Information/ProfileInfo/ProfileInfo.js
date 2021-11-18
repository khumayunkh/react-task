import React from "react";
import h from './Profile.module.css'
import ProfileStatusWithHooks from './ProfileStatus'

const ProfileInfo = (props) => {
    return (
        <div>
            <img  className={h.img1} src="https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"/>
            <div>
                <img src={props.profile.photos.small} className={h.img2}/>
                <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;