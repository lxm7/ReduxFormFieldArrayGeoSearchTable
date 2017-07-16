import React from 'react'
import { SelectField } from 'redux-form-material-ui'

import styles from "../styles.scss";

export const renderSelectField = props => (
    <div className = {styles.select}>
        <SelectField
            {...props}
            className = {styles.input}
            underlineStyle = {{borderColor: "#999"}}
            onChange = {(event, index, value) => props.input.onChange(value)}
            listStyle = {{padding: 0}}
            // value = {props.input.value = "Temp" || !props.input.value = "Perm") ? "Temp" : props.input.value }
        />
        {// props.meta.touched && props.meta.error && <span className = {styles.error}>{props.meta.error}</span>
        }
    </div>
);
