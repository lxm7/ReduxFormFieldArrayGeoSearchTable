import { fromJS, toJS, List, Map } from 'immutable'
import * as constants from './constants'

export default (state = fromJS({
    offices: JSON.parse(window.localStorage.getItem('officeLocations')) ||
    {
        offices: [{ id: 'An Example', officeName: 'Field - Please', officeType: 'Update' }],
        activeCountry: null
    },
}), { type, payload }) => {
    switch (type) {
    case constants.GET_OFFICE_LOCATIONS_REQUEST: {
        if (window.localStorage.getItem('officeLocations') !== null) {
            return state
        } else {
            return state.setIn(['offices', 'offices'], null)
        }
    }
    case constants.GET_OFFICE_LOCATIONS_SUCCESS: {
        if (window.localStorage.getItem('officeLocations') !== null) {
            return state
        } else {
            const officeLocations = fromJS(payload)
            return state.setIn(['offices', 'offices'], officeLocations)
        }
    }
    case constants.CHANGE_ACTIVE_COUNTRY:
        return state.setIn(['offices', 'activeCountry'], payload)
    case constants.SAVE_OFFICE_LOCATIONS: {
        const savedOfficeLocations = fromJS(payload)
        window.localStorage.setItem('officeLocations', JSON.stringify(savedOfficeLocations))
        window.alert(`You submitted:\n\n${JSON.stringify(savedOfficeLocations, null, 2)}`);
        return state.set('offices', savedOfficeLocations)
    }

    // case constants.SET_GEO_SUGGEST_SELECT: {
    //     const label = fromJS(payload.label)
    //     const lat = fromJS(payload.location.lat)
    //     const officeOfficeArray = state.getIn(['offices', 'offices'])

    //     officeOfficeArray.update(
    //         // officeOfficeArray.findIndex((item, i) => console.log(item) ),
    //         0,
    //         (item) => {
    //             console.log(item.get('lat'))
    //             let latToString = lat.toString()
    //             return item.set('latitude', latToString)
    //         }
    //     )

    // }
    default:
        return state
    }
}
