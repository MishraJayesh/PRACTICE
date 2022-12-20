import {
    ADD_COUNTER,
    RESET_COUNTER,
    ADD_TODO,
    CLEAR_TODO_LIST,
    DELETE_TODO,
    TOGGLE_TODO
} from "./actions.types";

export const addCounter = (count) => {
    return (dispatch) => {
        dispatch({
            type: ADD_COUNTER,
            payload: count
        })
    };
};

export const resetCounter = (count) => {
    return (dispatch) => {
        dispatch({
            type: RESET_COUNTER,
            payload: count
        })
    };
};

export const addTodo = text => {
    return {
        type: ADD_TODO,
        text
    };
};

export const clearTodoList = () => {
    return {
        type: CLEAR_TODO_LIST
    };
};

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        id
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id
    };
};
