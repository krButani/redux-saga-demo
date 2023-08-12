import * as types from "../types/postTypes";
import * as service from "../services/postServices";
import { takeLatest, takeEvery, put, call } from "redux-saga/effects";

function* addPost(data) {
  try {
    let response = yield call(service.addPost, data);
    
    console.log(response);

    console.log(response.status);
    console.log(response.data);

  } catch (e) {
    console.log(e);
    yield put({
      type: types.POST_ERROR,
      payload: {
        error: {
          message: e
        }
      }
    });
  }
}

export default function* postWatcher() {
  yield takeEvery(types.ADD_POST, addPost);
}
