import { takeEvery } from 'redux-saga'
import { put } from "redux-saga/effects";

const apiMap = {

}

const apiService = function*(action) {
  const { type, payload } = action;
  switch(type) {

  }

  if (apiMap.hasOwnProperty(type)) {
    yield apiMap[type](payload)
  }
}

const mySaga = function* mySaga() {
  yield* takeEvery(
    action => {
      return action
    }, apiService
  )
}

export default mySaga