import transactionReducer from './transaction.reducer'
import userReducer from './transaction.reducer'             //this is another copy of the same reducer(i.e. transactin reducer),,, don't import a reducer more than once
import buttonReducer from './button.reducer'

const temp = {transactionReducer, userReducer, buttonReducer}

export default temp; 