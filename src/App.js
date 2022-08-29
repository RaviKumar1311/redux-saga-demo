import "./App.css";
// import { connect } from "react-redux";
import { transactionList } from "./store/action/action";
import {incrementValue,decrementValue, incrementAsync} from './store/action/buttonAction'
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const _transactionList = useSelector((state) => state?.transactionReducer?.transactionList);
  const _counter  = useSelector((state)=>state?.buttonReducer)

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(transactionList());  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  

  // useEffect(() => {
  //   console.log(_transactionList);
  // }, [_transactionList]);

  return (
    <div className="App">
      redux demo
      <br />
      <div>

      <button style={{margin:"1rem"}} onClick={()=>dispatch(decrementValue())}>-</button>
      <>{_counter}</>
      <button style={{margin:"1rem"}} onClick={()=>dispatch(incrementValue())}>+</button>
      <button style={{margin:"1rem"}} onClick={()=>dispatch(incrementAsync())}>Increment async</button>
      </div>
      <br />
      
	  {
		!_transactionList?'Loading...':JSON.stringify(_transactionList)
	  }
      
    </div>
  );
}

export default App;
