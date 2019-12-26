import { combineReducers } from 'redux';
import { sideBarReducer } from "./app/sideBarReducer";
import { ActionConst} from "react-native-router-flux";

const initialState = {
    scene: {}
};

const sceneReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionConst.FOCUS:
            return {...state, scene};
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    sceneReducer
});