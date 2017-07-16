import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress'

import styles from './styles.scss'

const sizes = {
    small: 20,
    big: 50,
}

const Loading = ({ size }) => (
    <div className = {styles.root}>
        <CircularProgress
            size = {sizes[size]}
        />
    </div>
)

Loading.defaultProps = {
    size: 'small',
}

Loading.propTypes = {
    size: PropTypes.oneOf(['big', 'small']),
}

export default Loading
