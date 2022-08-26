import "./App.css";
// import { connect } from "react-redux";
import { transactionList } from "./store/action/action";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const _transactionList = useSelector((state) => state?.transactionReducer?.transactionList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(transactionList());  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  

  useEffect(() => {
    console.log(_transactionList);
  }, [_transactionList]);

  return (
    <div className="App">
      redux demo
      <br />
      <br />
      {JSON.stringify(_transactionList)}
    </div>
  );
}

export default App;
