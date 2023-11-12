import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => {
        console.log(counter)
        dispatch(increment())}}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;