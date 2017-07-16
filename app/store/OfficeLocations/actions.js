import * as constants from './constants'

export const getOfficesLocations = () => ({ type: constants.GET_OFFICE_LOCATIONS})
export const getOffices = (data) => ({ type: constants.GET_OFFICES, payload: data })
export const changeActiveCountry = (country) => ({ type: constants.CHANGE_ACTIVE_COUNTRY, payload: country }) // prevent required oprtype in map comlaining. Do we need this for offices?
export const saveOfficeLocations = (data) => ({ type: constants.SAVE_OFFICE_LOCATIONS, payload: data })

