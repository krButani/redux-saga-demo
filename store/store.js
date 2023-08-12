// import {createStore} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/rootReducer";

import { sagaMiddleware, rootSaga } from "./saga/sagaMiddleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
