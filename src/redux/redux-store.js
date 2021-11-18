import {applyMiddleware, combineReducers, createStore} from "redux";
import InformationReducer from "./Information_reducer";
import DialogReducer from "./Dialog_reducer";
import UsersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

console.log("Reducer " + UsersReducer)

let reducers= combineReducers({
    informationPage: InformationReducer,
    dialogPage: DialogReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store=store
export default store;