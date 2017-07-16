# redux-form-reluxe

NOTE: Please use a google maps API key of your own for completion of the demo. Thanks.

`npm i`

`npm run start`


This is an accumulation of several new features / technologies I've put together to create an editable address form, built on top of the amazing [redux-form](https://github.com/erikras/redux-form):

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
- Move remaining functions where possible to redux actions / reselect
- Look to add a node server with fs support and use fs for CSV upload.

