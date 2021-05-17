import React, { useReducer } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
          return state + 1
        case 'decrement':
          return state - 1
        case 'reset':
          return initialState;
        default:
          return state;
    }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>{count}</div>
      <ButtonGroup>
        <Button color="dark" onClick={()=>dispatch('increment')}>increment</Button>
        <Button color="dark" onClick={()=>dispatch('decrement')}>decrement</Button>
        <Button color="danger" onClick={()=>dispatch('reset')}>reset</Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
