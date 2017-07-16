import React from 'react'
import { TextField } from 'redux-form-material-ui'
import styles from "../styles.scss";

const stylesObj = {
  placeholder: {
    color: "#ccc",
    lineHeight: "1rem",
  },
  underlineStyle: {
    borderColor: "#999",
  }
};

export const renderTextField = ({ input, type, placeholder, meta: { touched, error } }) => (
    <div>
        <TextField {...input}
            type = {type}
            className = {styles.input}
            underlineStyle = {{ borderColor: "#999" }}
            hintText = {placeholder ? placeholder : null}
            hintStyle = {stylesObj.placeholder}
        />
      {touched && error && <span className = {styles.error}>{error}</span>}
    </div>
);
