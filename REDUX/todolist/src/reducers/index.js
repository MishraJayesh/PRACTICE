import { combineReducers } from "redux";
// import counter from "./counter";

import todos from "./todos";

const rootReducer = combineReducers({
    todos,
    // count: counter
});

export default rootReducer;
