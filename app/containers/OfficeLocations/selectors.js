import { createSelector } from 'reselect'

const selectOfficeLocationsState = (store) => store.get('officeLocations')

// eslint-disable-next-line import/prefer-default-export
export const selectTableRows = () => createSelector(
    selectOfficeLocationsState,
    (officeLocations) => officeLocations.get('offices'),
)
