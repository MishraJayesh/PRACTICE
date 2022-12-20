import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./actionsCreators";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const { addCounter, resetCounter } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="card card-body my-3">
      <button disabled={true} className="btn btn-primary">Your Count: ({count})</button>
      <br />
      <button className="btn btn-primary mx-0 mt-1" onClick={() => { addCounter(10) }}>ADD</button>
      <button className="btn btn-primary mx-1 mt-1" onClick={() => { resetCounter(10) }}>RESET</button>
    </div>
  );
};

export default Counter;