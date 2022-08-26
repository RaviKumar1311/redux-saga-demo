import { TRANSACTION_LIST_SUCCESS,TRANSACTION_LIST_ERROR } from "../type.action";

const initState = {
    transactionListError:"",
    transactionList:""
}

const reducers = (state = initState, { type, values, error }) => {
    switch (type) {
      case TRANSACTION_LIST_SUCCESS:
        return {
          ...state,
          transactionList: values,
         
        };
      case TRANSACTION_LIST_ERROR:
        return {
          ...state,
          transactionListError: error,
          
        };
        default:
            return state;
        }
      };
      
export default reducers;