# Redux With Saga Demo


## Installtion Setep

* 1. Install React Application npx create-next-app@letest
* 2. Install Redux and Saga npm install redux react-redux redux-saga



# takeLatest and takeEvery Diffrences.

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