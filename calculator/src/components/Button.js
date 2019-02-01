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
    },
    operationButton:{
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble:{
          width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

class Button extends Component {
    stylesButton = [styles.button]
    constructor(props){
        super(props)
        if(this.props.double) this.stylesButton.push(styles.buttonDouble)
        if(this.props.triple) this.stylesButton.push(styles.buttonTriple)
        if(this.props.operation) this.stylesButton.push(styles.operationButton)
    }
    render(){
        return (
            <TouchableHighlight onPress={() => this.props.onClick(this.props.label)}>
                <Text style={this.stylesButton}>{this.props.label}</Text>
            </TouchableHighlight>
        )
    }
}

export default Button