import { TRANSACTION_LIST, TRANSACTION_LIST_ERROR, TRANSACTION_LIST_SUCCESS } from "../type.action";

export const transactionList = (values) =>({
    type:TRANSACTION_LIST,
    values
});

export const transactionListSuccess = (values) =>({
    type:TRANSACTION_LIST_SUCCESS,
    values
});

export const transactionListError = (values) => ({
    type:TRANSACTION_LIST_ERROR,
    values
})