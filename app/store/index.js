import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux-immutable'
import { Map } from 'immutable'
import createBrowserHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'
import { reducer as form } from 'redux-form/immutable'
import { composeWithDevTools } from 'redux-devtools-extension' // added as breaking in prev iterations

import { reducer as officeLocations, sagas as officeLocationsSagas } from 'store/OfficeLocations'

export const browserHistory = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({
        form,
        officeLocations,
    }),
    Map(),
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware,
        ),
    ),
)

sagaMiddleware.run(function* rootSaga() {
    yield Object.values({
        ...officeLocationsSagas,
    }).map((saga) => (fork(saga)))
})

export default store
