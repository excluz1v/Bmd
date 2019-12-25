import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { ProfileReducer } from './Profile-reducer';
import { HistoryReducer } from './history-reducer';
import { usersReducer } from './users-reducer';
import {authReducer} from './auth-reducer'
import thunk from 'redux-thunk';



let reducers = combineReducers({
    profilePage: ProfileReducer,
    history: HistoryReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store
export default store;