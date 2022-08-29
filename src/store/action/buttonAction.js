import { INCREMENT,DECREMENT, INCREMENT_ASYNC } from "../type.action";

export const incrementValue = (values) => ({
    type:INCREMENT,
    values
});

export const decrementValue = (values) => ({
    type:DECREMENT,
    values
});

export const incrementAsync = (values) => ({
    type:INCREMENT_ASYNC,
    values
})