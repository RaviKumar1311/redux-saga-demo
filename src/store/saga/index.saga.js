import { takeLatest, all, takeEvery } from "redux-saga/effects";

import { TRANSACTION_LIST,INCREMENT_ASYNC } from "../type.action";
import { onTransactionCount } from "./saga";
import {incrementAsync} from './buttonSaga'

function* sagas() {
   
    yield all([
      takeLatest(TRANSACTION_LIST, onTransactionCount),
      takeEvery(INCREMENT_ASYNC,incrementAsync)
    ]);
    
}

export default sagas;