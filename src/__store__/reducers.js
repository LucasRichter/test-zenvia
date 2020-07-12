import makes from './make'
import models from './model'
import versions from './version'
import vehicles from './vehicle'
import { combineReducers } from 'redux'

export default combineReducers({
  makes,
  versions,
  models,
  vehicles
})