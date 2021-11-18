import React from "react";
import h from './Posts.module.css';

const Posts = (props)=>{
    return(
        <div className={h.post}>
            <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"/>
            {props.Message}
            <div>
                <span>Like</span> {props.likes}
            </div>
        </div>
    )
}

export default Posts