import { all } from 'redux-saga/effects'

import characters from './characters/saga'

export default function * root () {
  yield all([
    characters()
  ])
}
