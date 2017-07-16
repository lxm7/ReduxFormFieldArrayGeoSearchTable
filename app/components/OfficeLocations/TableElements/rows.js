import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from "material-ui/RaisedButton";
import Loading from 'components/Loading'
import { Field, FieldArray, propTypes } from 'redux-form/immutable'
import { DatePicker } from 'redux-form-material-ui'
import Geosuggest from 'react-geosuggest';
import moment from 'moment';

import { renderGeosuggest } from '../FormElements/geosuggestField';
import { renderTextField } from '../FormElements/textField';
import { renderLatLngTextField } from '../FormElements/latLngTextField';
import { renderSelectField } from '../FormElements/selectField';
import DateTimeFormat from '../helpers/dateTimeFormat';
import { findFieldRowFromGeoSuggest, formatCoOrdinates } from '../helpers/latLngFormat';
import styles from "../styles.scss";

class TableRows extends Component {

    handleGeoSuggestChange(suggest, input) {
        // Update GeoSuggest
        input.onChange(suggest.label)
        // update lat/lng
        let lat = suggest.location.lat
        let lng = suggest.location.lng
        let inputRow = findFieldRowFromGeoSuggest(input)

        let latFormat = formatCoOrdinates(lat, 6)
        let lngFormat = formatCoOrdinates(lng, 6)
        let currentDate = moment().unix();

        this.props.change(inputRow + 'lat', latFormat)
        this.props.change(inputRow + 'lng', lngFormat)
        this.props.change(inputRow + 'id', currentDate)
    }

    render() {
        const { fields, meta: { touched, error, pristine, submitFailed }, change } = this.props
        if (pristine && !fields.length) return <Loading size = 'big' />
        return (
            <div className = {styles.tableBody}>
                {fields.map((office, index) => {
                    return (
                        <div key = {index}
                           className = {styles.row} >
                            <div className = {styles.tableBodyCell}>
                                <Field
                                    name = {`${office}.id`}
                                    type="text"
                                    component = {renderTextField}
                                />
                            </div>
                            <div className = {styles.tableBodyCell}>
                                <Field
                                    name = {`${office}.officeName`}
                                    type="text"
                                    component = {renderGeosuggest}
                                    handleOnChange = {this.handleGeoSuggestChange.bind(this)}
                                />
                            </div>
                            <div className = {styles.tableBodyCell}>
                                <Field
                                    name = {`${office}.officeType`}
                                    component = {renderSelectField}>
                                    <MenuItem value = {'Temp'} primaryText="Temp"/>
                                    <MenuItem value = {'Perm'} primaryText="Perm"/>
                                </Field>
                            </div>
                            <div className = {styles.tableBodyCell}>
                                <Field
                                    name = {`${office}.startDate`}
                                    mode="landscape"
                                    component = {DatePicker}
                                    format = {(value, name) => value === '' ? null : (typeof value === 'string') ? new Date(value) : value}
                                    underlineStyle = {{borderColor: "#999"}}
                                    formatDate = {new DateTimeFormat('en-GB', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                    }).format}
                                />
                            </div>
                            <div className = {styles.tableBodyCell}>
                                <Field
                                    name = {`${office}.endDate`}
                                    style = {{ width: '100%', fontSize: '0.8rem' }}
                                    mode="landscape"
                                    component = {DatePicker}
                                    format = {(value, name) => value === '' ? null : (typeof value === 'string') ? new Date(value) : value}
                                    underlineStyle = {{borderColor: "#999"}}
                                    formatDate = {new DateTimeFormat('en-GB', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                    }).format}
                                  />
                            </div>

                            <div className = {styles.tableBodyCell}>
                                <Field
                                    name = {`${office}.lat`}
                                    type="text"
                                    component = {renderLatLngTextField}
                                />
                            </div>
                            <div className = {styles.tableBodyCell}>
                                <Field
                                    name = {`${office}.lng`}
                                    type="text"
                                    component = {renderLatLngTextField}
                                />
                            </div>
                            <div className = {styles.tableBodyCell}>
                                <Field
                                    name = {`${office}.contactName`}
                                    type="text"
                                    component = {renderTextField}
                                />
                            </div>
                            <div className = {styles.tableBodyCell}>
                                <Field
                                    name = {`${office}.contactNumber`}
                                    type="text"
                                    component = {renderTextField}
                                />
                            </div>
                            <div className = {styles.tableBodyCell}>
                                <Field
                                    name = {`${office}.contactEmail`}
                                    type="text"
                                    component = {renderTextField}
                                    placeholder = {'Separate each with spaces'}
                                />
                            </div>
                            <RaisedButton
                                className = {styles.delete}
                                buttonStyle = {{
                                    height: '18px',
                                    lineHeight: '18px',
                                    width: '18px'
                                }}
                                label="x"
                                onClick = {() => fields.remove(index)}
                            />
                        </div>
                    )

                })}
                <div className = {styles.addRowContainer}>
                    <RaisedButton
                        label="Add new office location"
                        className = {styles.addRow}
                        secondary = {true}
                        onClick = {() => fields.push( Map() )}
                        icon = {<FontIcon className="muidocs-icon-custom-github" />}>
                    </RaisedButton>
                    {(touched || submitFailed) && error && <span className = {styles.error} >{error}</span>}
                </div>
            </div>
        )
    }
}

TableRows.propTypes = {
    fields: PropTypes.shape({}).isRequired,
    meta: PropTypes.shape({}).isRequired,
};

export default TableRows
