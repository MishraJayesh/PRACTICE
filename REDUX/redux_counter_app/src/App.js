import React from "react";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from "./reducer/index";
import TodoList from "./components/todo.list";
import TodoInput from "./components/todo.input";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;