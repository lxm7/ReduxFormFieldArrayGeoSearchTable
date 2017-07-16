import { delay } from 'redux-saga'
import { put, call, select, takeEvery } from 'redux-saga/effects'
import getOfficeLocation from '../../../mockData/getOfficeLocations.js'

import * as constants from './constants'

export function* getOfficesLocations() {
    yield put({ type: constants.GET_OFFICE_LOCATIONS_REQUEST })

    const offices = yield call(getOfficeLocation)
    yield call(delay, 1000) // for visibility
    yield put({ type: constants.GET_OFFICE_LOCATIONS_SUCCESS, payload: offices })
}

export function* tableRowOfficeLocations() {
    yield takeEvery(constants.GET_OFFICE_LOCATIONS, getOfficesLocations)
}
