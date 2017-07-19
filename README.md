# Redux Form Field Array Complete (with address lookup, file upload and id generator)

NOTE: Please use a google maps API key of your own for completion of the demo. Thanks.

`npm i`

`npm run start`


This is an accumulation of several features / technologies I've put together to create a real time editable form with autocompete address lookup, built on top of [redux-form](https://github.com/erikras/redux-form):

Features included from redux-form are:
- Reinitialisation
- ImmutableJS support
- Field arrays
- Multiple validation types


Also included:
- React's [Material UI](http://www.material-ui.com/#/)
- Google map API for address look up (with auto populating lat/lngs and a simple Unix id generator)
- HTML5's FileReader and Drag Drop API for file uploading and processing (CSV) in a pure View environment
- Redux Saga to mimic initial load of data from server. Localstorage used to save progress.
- LocalStorage to show saved input
- Reselect for nested, derived and memoized selectors from state slices.

TODOs
- Make CSV not override existing rows
- Move remaining functions where possible to redux actions / reselect
- Look to add a node server with fs support and use fs for CSV upload.
