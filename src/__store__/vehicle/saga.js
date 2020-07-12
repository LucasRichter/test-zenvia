
import { all, takeLatest, put, call } from 'redux-saga/effects'
import { getVehicles } from '../../services/vehiclesService'
import { setVehicless, loadVehicles } from '.'

function* _loadVehicles({ payload }) {
  const makes = yield call(getVehicles, payload)
  yield put(setVehicless(makes))
}

export default function* root() {
  yield all([
    takeLatest(loadVehicles.type, _loadVehicles)
  ])
}