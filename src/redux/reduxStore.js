import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {dialogReducer} from "./reducers/dialogReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
})

export let store = createStore(reducers)