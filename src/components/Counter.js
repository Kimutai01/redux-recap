import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../features/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <div>{count}</div>
      <button type="button" onClick={() => dispatch(increase())}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrease())}>
        -
      </button>
    </>
  );
};

export default Counter;
