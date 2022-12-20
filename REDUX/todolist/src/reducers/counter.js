import { ADD_COUNTER, RESET_COUNTER } from "../actions/actions.types";

const counter = (state = 0, action) => {
    if (action.type === ADD_COUNTER) {
        return state + action.payload;
    } else if (action.type === RESET_COUNTER) {
        return state.action;
    } else {
        return state;
    }
};

export default counter;
