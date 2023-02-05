import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <button
        aria-label="Increment Value"
        onClick={() => dispatch(increment())}
      ></button>
    </div>
  );
}
