
import { all, takeLatest, put, call } from 'redux-saga/effects'
import { setModels, loadModels } from '.'
import { getModels } from '../../services/modelService'

function* _loadModels({payload}) {
  const models = yield call(getModels, payload)
  yield put(setModels(models))
}

export default function* root() {
  yield all([
    takeLatest(loadModels.type, _loadModels)
  ])
}