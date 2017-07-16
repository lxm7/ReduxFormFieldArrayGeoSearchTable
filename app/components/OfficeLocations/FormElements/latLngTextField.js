import React, { Component } from 'react'
import { TextField } from 'redux-form-material-ui'
import styles from "../styles.scss";

export const renderLatLngTextField = ({ input, type, meta: { touched, error } }) => (
    <div>
        <TextField {...input}
            type = {type}
            className = {styles.input}
            underlineStyle = {{borderColor: "#999"}}
        />
        {touched && error && <span className = {styles.error}>{error}</span>}
    </div>
)

