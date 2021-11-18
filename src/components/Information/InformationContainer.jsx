import React from "react";
import Profile from './Information'
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/Information_reducer";
import {withRouter} from "react-router-dom";
import { compose } from "redux";

class InformationContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return (
            <>
                {
                    this.props.profile ?
                    <Profile {...this.props} 
                        profile={this.props.profile} 
                        status={this.props.status} 
                        updateStatus={this.props.updateStatus}/>
                    :
                    <div></div>
                }
            </>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.informationPage.profile,
    status: state.informationPage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(InformationContainer)
