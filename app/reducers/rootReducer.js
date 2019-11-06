import { combineReducers } from 'redux';
import { sideBarReducer } from "./app/sideBarReducer";

export const rootReducer = combineReducers({
    sideBar: sideBarReducer,
});