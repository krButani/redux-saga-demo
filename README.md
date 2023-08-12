# Redux With Saga Demo


## Installtion Step

1. Install React Application npx create-next-app@letest
2. Install Redux and Saga npm install redux react-redux redux-saga


## Setup Project folders and files

1. Create ./store folder 
2. inside create store/action, store/reducer, store/saga, store/services, store/types folders
3. create file store/store.js
4. create file store/reducer/rootReducer.js
5. create file store/saga/sagaMiddleware.js
6. create file store/services/config.js
7. other folder you need to create file according you need like if you have post curd than create respective files 
    * /store/action/postAction.js
    * /store/reducer/postReducer.js
    * /store/saga/postSaga.js
    * /store/types/postTypes.js
    * /store/services/postServices.js


## Write Basic Code to Configure Store

1. first configure rootReducer (store/reducer/rootReducer.js)
    
```
import { combineReducers } from "redux";
import { postReducer } from "./postReducer";

export default combineReducers({
  postReducer
});

```
- here we take example of post reducer only. May be you have multiple reducer so you can import all reducer and put inside like this `combineReducers({ postReducer, yourReducure1, yourReducure2.... })`

2. Now Configure sagaMiddleware (store/saga/sagamiddleware.js)

```
import postWatcher from "./postSaga";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();
export function* rootSaga() {
  yield all([
    fork(postWatcher),
  ]);
}
```

- here you can import postWatcher from store/saga/postSaga.js and put inside rootSaga. If you have more `Watcher` than you add like this `yield all([
    fork(postWatcher),
    fork(yourWatcher1),
    fork(yourWatcher2),
  ])`


3. Now finally configure store (store/store.js)

```
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
```

- Never change this store.js file its perfectly configure.

## takeLatest and takeEvery Diffrences.

```
takeEvery:

The most common takeEvery function is very similar to redux-thunk in its behaviour and methodology. It's basically a wrapper for yield take of a pattern or channel and yield fork.

The clue about takeEvery is that it allows multiple instances of a defined action/task (such as fetchSomeThing in the example below) to be started concurrently/simultaniously.

Unlike takeLatest you can start a new fetchSomeThing task while one or more previous instances of fetchSomeThing have not yet been completed/terminated, therefore are still pending. Keep in mind that there is no guarantee that the tasks will terminate/complete in the same order they were started. To handle out of order responses, you could use takeLatest.

From the official docs:

takeEvery(pattern, saga, ...args)

Spawns a saga on each action dispatched to the Store that matches pattern.

pattern: String | Array | Function
saga: Function - a Generator function
args: Array - arguments to be passed to the started task. takeEvery will add the incoming action to the argument list (i.e. the action will be the last argument provided to saga)
You can also pass in a channel as argument instead of a pattern resulting in the same behaviour as takeEvery(pattern, saga, ...args).

takeLatest:

The takeLatest helper function in contrast only gets the response of the latest request that was fired and can be seen as a wrapper for yield take of a pattern or channel and an additional if-statement checking if a lastTask is present (a previous task that is still pending), which will then be terminated via a yield cancel and a subsequent yield fork that will spawn the current task/action.

From the official docs:

takeLatest(pattern, saga, ...args)

Will only get the response of the latest request fired.

pattern: String | Array | Function
saga: Function - a Generator function
args: Array - arguments to be passed to the started task. takeLatest will add the incoming action to the argument list (i.e. the action will be the last argument provided to saga)
Similar to takeEvery you can also pass in a channel as argument instead of a pattern.
```
## Conclusion

```

When you called insert, delete and update api that time used takeEvery. // response until can't take back not fire another api
When you used List api that time used takeLatest // accept both api response call simultaniously

```

* Checkout for more details https://stackoverflow.com/questions/61984294/takeevery-and-takelatest-why-when-to-use-use-simultaneously