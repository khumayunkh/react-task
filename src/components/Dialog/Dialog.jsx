import React from 'react';
import h from "./Dialog.module.css";
import DialogsItems from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../imgg/FormsControls/FormControl';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const Dialog = (props) =>{
    let state = props.dialogPage;
    let DialogElement = state.dialogs.map(d => <DialogsItems name={d.name} key={d.id} id={d.id}/>)
    let MessagesElement = state.posts.map(p => <Messages Message={p.Message}/>)
    let addNewMessage=(values)=>{
        props.sendMessage(values.newMessageBody)
    }
    if (!props.isAuth===false)return <Redirect to={"/login"}/>;
    return(
        <div className={h.Dialogs}>
            <div className={h.DialogsItems}>
                {DialogElement}
            </div>
            <div className={h.Masseges}>
                <div>{MessagesElement}</div>
               <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const maxLength= maxLengthCreator(100)
const AddMessageForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength]} component={Textarea} 
                    name={"newMessageBody"} placeholder={"Enter your message"}/>
            </div>
                <div><button>Sent</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);
export default Dialog;