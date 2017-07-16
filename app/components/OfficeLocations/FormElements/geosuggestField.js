import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest';
import classNames from 'classnames';

import styles from "../styles.scss";

export const renderGeosuggest = ({ input, type, meta: { touched, error, pristine }, handleOnChange }) => (
    <div>
        <Geosuggest {...input}
            type = {['geocode']}
            string="Search places"
            className = {classNames(styles.input, styles.geosuggestInputWrapper)}
            initialValue = {input.value}
            onSuggestSelect = { (suggest) => handleOnChange(suggest, input) }
            inputClassName = {styles.geosuggestInput}
            suggestsClassName = {styles.geosuggestList}
            suggestItemClassName = {styles.geosuggestItem}
            suggestsHiddenClassName = {styles.geosuggestListHidden}
            suggestItemActiveClassName = {styles.geosuggestItemActive}
        />
        {touched && error && <span className = {styles.error}>{error}</span> || !pristine && <span className = {styles.error}>{error}</span>}
    </div>
)
