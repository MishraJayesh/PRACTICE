import { ADD_COUNTER, RESET_COUNTER } from "../action_type/index";

const initialState = {
    amount: 0,
    name: "JAY"
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNTER:
            return {
                amount: ++state.amount,
            };
        case RESET_COUNTER:
            return {
                amount: ++state.amount,
            };
            default:
            return state;
    }
};

export default counter;