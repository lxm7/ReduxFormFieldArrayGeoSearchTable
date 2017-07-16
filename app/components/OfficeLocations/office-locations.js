import React, { Component } from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from 'react-immutable-proptypes';
import { intlShape } from "react-intl";
import Paper from "material-ui/Paper";
import Helmet from "react-helmet";
import RaisedButton from "material-ui/RaisedButton";
import Loading from 'components/Loading'
import { Field, FieldArray, propTypes, reduxForm } from 'redux-form/immutable'
import { Map } from "immutable";

import styles from "./styles.scss";
import TableHeader from './TableElements/header';
import TableRow from './TableElements/rows'
import FileField from './FormElements/fileField'

const OfficeLocations = ({ handleSubmit, pristine, reset, submitting, change, intl, saveOfficeLocations }) => (
    <div className = {styles.root}>
        <div className = {styles.content}>
            <Paper className = {styles.block}>
                <form
                    onSubmit = {handleSubmit(saveOfficeLocations)}
                    className = {styles.form}>

                    <Field name="offices" component = {FileField} accept='text/csv' />

                    <TableHeader />

                    <FieldArray
                        name="offices"
                        component = {TableRow}
                        change = {change}
                    />

                    <RaisedButton
                        type="submit"
                        label="Save"
                        primary = {true}
                        className = {styles.save}
                        disabled = {submitting || pristine}
                    />
                </form>
            </Paper>
        </div>
    </div>
)

OfficeLocations.propTypes = Object.assign({...propTypes}, { // redux form propTypes
    handleSubmit: propTypes.handleSubmit,
});

export default OfficeLocations;
