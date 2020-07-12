
import { all, takeLatest, put, call } from 'redux-saga/effects'
import { getMake } from '../../services/makeService'
import { setMakes, loadMakes } from '.'

function* _loadMakes() {
  const makes = yield call(getMake)
  yield put(setMakes(makes))
}

export default function* root() {
  yield all([
    takeLatest(loadMakes.type, _loadMakes)
  ])
}