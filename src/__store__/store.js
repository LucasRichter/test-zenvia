import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import createSaga from 'redux-saga'
import rootSaga from './sagas'

const sagasMiddleware = createSaga()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagasMiddleware];
const devMode = process.env.NODE_ENV === 'development';

export default function configureAppStore() {

  const store = configureStore({
    reducer: rootReducer,
    devTools: devMode,
    middleware
  })

  let sagasThread = sagasMiddleware.run(rootSaga)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))

    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagasThread.cancel()
      sagasThread.done.then(() => {
        sagasThread = sagasMiddleware.run(nextSagas)
      })
    })
  }

  return store
}
