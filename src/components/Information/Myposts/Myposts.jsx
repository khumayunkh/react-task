import React from "react";
import h from './Myposts.module.css';
import Posts from "../Posts/Posts";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../../imgg/FormsControls/FormControl";

const maxLength10= maxLengthCreator(10)

const MyPosts = (props)=> {
    let MessagesElement =
        props.messages.map(m => <Posts Message={m.Message} likes={m.likes}/>);

    let NewPostElement = React.createRef();
    let OnAddPost = (values) =>{
        props.addPost(values.NewPostText);
    }
    return(
        <div>
            <h4>My posts</h4>
            <AddNewPostFormRedux onSubmit={OnAddPost}/>
            {MessagesElement}
        </div>
    )
}

const AddNewPostForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                 <Field className={h.input} name={"NewPostText"} component={Textarea} placeholder={"Post message"} 
                    validate={[required, maxLength10]}/>
            </div>
            <button className={h.button}>Add post</button>
        </form>
    )
}
const AddNewPostFormRedux= reduxForm({ form:'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPosts;