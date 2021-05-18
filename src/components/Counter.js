import React, { useReducer } from "react";
import { Button, ButtonGroup, Badge } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const initialState = {
   counter: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
          return {...state, counter: state.counter + action.payload}
        case 'decrement':
          return {...state, counter: state.counter - action.payload} 
        case 'reset':
          return initialState;
        default:
          return state;
    }
}

const Counter = () => {
  const [state1, dispatch1] = useReducer(reducer, initialState)
  const [state2, dispatch2] = useReducer(reducer, initialState)
  return (
    <div>
      <ButtonGroup>
        <Button color="primary" >
           Counter1 <Badge color="info">{state1.counter}</Badge>
        </Button>
        <Button color="primary" >
           Counter2 <Badge color="info">{state2.counter}</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={()=>dispatch1({type: 'increment',payload: 1})}>increment 1</Button>
        <Button color="dark" onClick={()=>dispatch1({type: 'decrement',payload: 1})}>decrement 1</Button>
        <Button color="danger" onClick={()=>dispatch1({type: 'reset'})}>reset 1</Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={()=>dispatch2({type: 'increment',payload: 1})}>increment 1</Button>
        <Button color="dark" onClick={()=>dispatch2({type: 'decrement',payload: 1})}>decrement 1</Button>
        <Button color="danger" onClick={()=>dispatch2({type: 'reset'})}>reset 2</Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
