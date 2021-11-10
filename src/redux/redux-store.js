import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import  thunkMiddleware from "redux-thunk"
let reducers=combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer
})
let store=createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store;

export default store;