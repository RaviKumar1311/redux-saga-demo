import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducer/index.reducer";
import sagas from "./saga/index.saga";

const REDUCERS = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();

const NODE_ENV= 'development' | 'production' | 'test';



  

export default function configureStore(initialState = {}) {
    const STORE = createStore(
        REDUCERS,
        initialState,
        compose(applyMiddleware(sagaMiddleware)),
        +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    STORE.runSaga = sagaMiddleware.run
    STORE.runSaga(sagas)

    if (module.hot && NODE_ENV === "development") {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("./reducer/index.reducer", () => {
            const nextRootReducer = require("./reducer/index.reducer");
            STORE.replaceReducer(nextRootReducer);
        });
    }

    return STORE;
}