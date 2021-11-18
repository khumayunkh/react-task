import InformationReducer from "./Information_reducer";
import DialogReducer from "./Dialog_reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SENT_MESSAGE = 'SENT_MESSAGE'
let store = {
    state : {
        DialogsPage: {
            posts: [
                {Message: 'Hi, what are you doing?'},
                {Message: 'I\'m playing footbal?'},
                {Message: 'I will back at 10pm'},
                {Message: 'Ok'}
            ],
            NewMessageBody:'',
            dialogs: [
                {id: 1, name: 'Leo'},
                {id: 2, name: 'Valera'},
                {id: 3, name: 'Lera'},
                {id: 4, name: 'Humoyun'},
                {id: 5, name: 'Maks'}
            ],
        },
        InformationPage: {
            messages: [
                {Message: 'Hi, how are you?', likes: 33},
                {Message: 'Good, and what about you?', likes: 23},
                {Message: 'Normal, where are you?', likes: 12},
                {Message: 'At home', likes: 40}
            ],
            newPostText:''
        }
    },
    GetState(){
        return this.state
    },

    // addPost (PostMessage) {
    //     let NewPost = {
    //         Message: this.state.InformationPage.newPostText,
    //         likes: 10
    //     }
    //     this.state.InformationPage.messages.push(NewPost)
    //     store.rerenderEntiredTree(this.state);
    // },
    //
    // updateNewPostText (newPost){
    //     this.state.InformationPage.newPostText= newPost;
    //     store.rerenderEntiredTree(this.state);
    // },

    subscribe (observer) {
        store.rerenderEntiredTree = observer;
    },
    dispatch (action) {
        this.state.InformationPage = InformationReducer(this.state.InformationPage, action);
        this.state.DialogsPage = DialogReducer(this.state.DialogsPage, action);
        this.rerenderEntiredTree(this.state);
    }
};
// export const AddPostActionCreator= () =>({type:ADD_POST})
// export const UpdateNewPostCreator = (text) =>({type:UPDATE_NEW_POST, newPost:text})
// export const SentMessage= () =>({type:SENT_MESSAGE})
// export const UpdateNewMessageBodyCreator = (body) =>({type:UPDATE_NEW_MESSAGE_BODY, body:body})

export default store;