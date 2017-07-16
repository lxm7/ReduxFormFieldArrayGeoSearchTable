import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector, createSelector } from 'reselect';
import { reduxForm } from "redux-form/immutable";
import { withGoogleMap } from 'react-google-maps'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs'

import { getOfficesLocations, saveOfficeLocations } from 'store/OfficeLocations/actions';
import OfficeLocationsComponent from "components/OfficeLocations";
import validate from "components/OfficeLocations/FormElements/validate";
import * as selectors from './selectors'

export default connect(
    createStructuredSelector({
        initialValues: selectors.selectTableRows(),
    }),
    (dispatch) => bindActionCreators({ getOfficesLocations, saveOfficeLocations }, dispatch)
)(reduxForm({
    form: "OfficeLocations",
    enableReinitialize: true,
    validate
})(OfficeLocationsComponent));
