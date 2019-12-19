import { createStore } from "redux";
import { combineReducers } from "redux";
import { ProfileReducer } from './Profile-reducer';
import { HistoryReducer } from './history-reducer';
import { usersReducer } from './users-reducer';




let reducers = combineReducers({
    profile: ProfileReducer,
    history: HistoryReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

window.store = store
export default store;