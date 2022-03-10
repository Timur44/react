import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import  thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
let reducers=combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer,
    authReducer,
    appReducer,
    form:formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)))
window.store=store;

export default store;