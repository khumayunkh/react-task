const SENT_MESSAGE = 'SENT_MESSAGE'

let initialState = {
    posts: [
        {Message: 'Hi, what are you doing?'},
        {Message: 'I\'m playing footbal?'},
        {Message: 'I will back at 10pm'},
        {Message: 'Ok'}
    ],
    dialogs: [
        {id: 1, name: 'Leo'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Lera'},
        {id: 4, name: 'Humoyun'},
        {id: 5, name: 'Maks'}
    ],
}
const DialogReducer = (state = initialState, action) => {
    switch (action.type) {
            case  SENT_MESSAGE:
            let body = action.newMessageBody;
                return{
                    ...state,
                    posts:[...state.posts,{id:6, Message: body }]
                }
            default:
            return state;
    }
}
export const SentMessage = (newMessageBody) => ({type: SENT_MESSAGE, newMessageBody})

export default DialogReducer