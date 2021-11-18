import React from 'react';
import {SentMessage} from "../../redux/Dialog_reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import withAuthRedirect from './../../hoc/withAuthRedirect'
import { compose } from 'redux';

let mapStateToProvider = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProvider = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(SentMessage(newMessageBody))
        }
    }
}
export default compose(
    connect(mapStateToProvider, mapDispatchToProvider),
    withAuthRedirect)
(Dialog);