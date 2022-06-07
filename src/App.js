import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import { add, sub } from './store/action';

function App() {
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.count);
  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <div>
        <button onClick={()=>dispatch(sub)}>-</button>
        <button onClick={()=>dispatch(add)}>+</button>
      </div>
    </div>
  );
}

export default App;
