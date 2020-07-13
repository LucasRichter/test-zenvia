
import { all, takeLatest, put, call } from 'redux-saga/effects'
import { loadCharacters, setCharacters } from '.'
import getCharacters from '../../services/getCharacters'
import { setApi } from '../api'

function * _loadCharacters ({ payload }) {
  yield put(setApi({ key: 'characters', value: true }))
  const characters = yield call(getCharacters, payload)
  yield put(setCharacters(characters))
  yield put(setApi({ key: 'characters', value: false }))
}

export default function * root () {
  yield all([
    takeLatest(loadCharacters.type, _loadCharacters)
  ])
}
