import { takeLatest, all } from "redux-saga/effects";

import { TRANSACTION_LIST } from "../type.action";
import { onTransactionCount } from "./saga";

function* sagas() {
   
    yield all([
      takeLatest(TRANSACTION_LIST, onTransactionCount)]);
}

export default sagas;