import postWatcher from "./postSaga";
import createSagaMiddleware from "redux-saga";
export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([
    fork(postWatcher),
  ]);
}