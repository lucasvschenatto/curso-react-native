import React from 'react';
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidateProps = props =>
    <Text style={{ fontSize: 35 }}>
        {props.label || 'Oops'}
        {props.year + 2000}
    </Text>

ValidateProps.defaultProps = {
    label: 'Year: '
}

ValidateProps.propTypes = {
    year: PropTypes.number.isRequired
}

export default ValidateProps