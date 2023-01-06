import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/index";

const TodoInput = () => {
  const [text, setText] = useState("");
  const todos = useSelector(state => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    if (text !== "") {
      dispatch(addTodo(text));
      setText("");
    } else {
    }
    event.preventDefault();
  };

  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white mx-2 my-2">
              <i className="fas fa-book" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
            name="todo"
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </div>
        <button
          className="btn btn-block btn-primary mt-3"
          onClick={handleSubmit}
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
