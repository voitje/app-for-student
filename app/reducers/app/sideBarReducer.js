import { IS_OPEN, IS_CLOSE } from "../../actions/sideBarActions";

const initialState = {
    isOpen: false,
};

export function sideBarReducer(state = initialState, action) {
    switch (action.type) {
        case IS_OPEN:
            return {...state, isOpen: !state.isOpen};
        default:
            return state;
    }
}