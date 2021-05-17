import React, { useReducer } from "react";
import { Button, ButtonGroup, Badge } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const initialState = {
   counter1: 0,
   counter2: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
          return {...state, counter1: state.counter1 + action.payload}
        case 'decrement':
          return {...state, counter1: state.counter1 - action.payload}
        case 'increment2':
          return {...state, counter2: state.counter2 + 1}
        case 'decrement2':
          return {...state, counter2: state.counter2 - 1}  
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
      <ButtonGroup>
        <Button color="primary" >
           Counter1 <Badge color="info">{count.counter1}</Badge>
        </Button>
        <Button color="primary" >
           Counter2 <Badge color="info">{count.counter2}</Badge>
        </Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={()=>dispatch({type: 'increment',payload: 1})}>increment 1</Button>
        <Button color="dark" onClick={()=>dispatch({type: 'decrement',payload: 1})}>decrement 1</Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={()=>dispatch({type: 'increment', payload: 5})}>increment 5</Button>
        <Button color="dark" onClick={()=>dispatch({type: 'decrement', payload: 5})}>decrementm5</Button>
      </ButtonGroup>
      <p></p>
      <ButtonGroup>
        <Button color="dark" onClick={()=>dispatch({type: 'increment2'})}>increment counter2</Button>
        <Button color="dark" onClick={()=>dispatch({type: 'decrement2'})}>decrement counter2</Button>
      </ButtonGroup>
      <p></p>
      <Button color="danger" onClick={()=>dispatch({type: 'reset'})}>reset</Button>
    </div>
  );
};

export default Counter;
