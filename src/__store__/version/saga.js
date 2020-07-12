
import { all, takeLatest, put, call } from 'redux-saga/effects'
import { setVersion, loadVersion } from '.'
import { getVersions } from '../../services/versionServices'

function* _loadVersion({payload}) {
  const versions = yield call(getVersions, payload)
  yield put(setVersion(versions))
}

export default function* root() {
  yield all([
    takeLatest(loadVersion.type, _loadVersion)
  ])
}