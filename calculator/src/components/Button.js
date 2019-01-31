import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    }
})

class Button extends Component {
    render(){
        return (
            <TouchableHighlight onPress={this.props.onClick}>
                <Text style={styles.button}>{this.props.label}</Text>
            </TouchableHighlight>
        )
    }
}

export default Button