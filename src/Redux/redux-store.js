import { createStore } from "redux";
import { combineReducers } from "redux";
import { ProfileReducer } from './Profile-reducer';
import { HistoryReducer } from './history-reducer';




let reducers = combineReducers({
    profile: ProfileReducer,
    history: HistoryReducer
})

let store = createStore(reducers);

window.store = store
export default store;