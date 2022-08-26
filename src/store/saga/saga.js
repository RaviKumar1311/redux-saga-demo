
import { call, put } from "redux-saga/effects";
import {transactionListSuccess} from '../action/action'
import axios from 'axios';

const getPublicAPI = (path) => {
    return axios({
      method: "get",
      url: path,
      headers: {
        "content-type": "application/json",
      },
    });
  };

  export function* onTransactionCount(){
    try{
        const data = yield call(
          getPublicAPI,
          'https://api.coindesk.com/v1/bpi/currentprice.json'
        );
        if(data.status===200){
          yield put(transactionListSuccess(data.data));
        }
      
    }catch(error){
  
    }
  }