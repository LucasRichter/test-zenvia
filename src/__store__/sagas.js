import { all } from 'redux-saga/effects'

import makes from './make/saga'
import version from './version/saga'
import model from './model/saga'
import vehicle from './vehicle/saga'

export default function* root() {
  yield all([
    makes(),
    version(),
    vehicle(),
    model()
  ])
}
