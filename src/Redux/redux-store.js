import { createStore, applyMiddleware,compose } from "redux";
import { combineReducers } from "redux";
import { ProfileReducer } from './Profile-reducer';
import { HistoryReducer } from './history-reducer';
import { usersReducer } from './users-reducer';
import {authReducer} from './auth-reducer'
import {AppReducer} from './app-reducer'
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';



let reducers = combineReducers({
    profilePage: ProfileReducer,
    history: HistoryReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    appred: AppReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// let store = createStore(reducers, applyMiddleware(thunk));

window.store = store
export default store;