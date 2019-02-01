import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View
}  from 'react-native'

const styles = StyleSheet.create({
    display:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
})

class Display extends Component{
    render(){
        return (
            <View style={styles.display}>
                <Text style={styles.displayValue}
                    numberOfLines={1}
                    >
                    {this.props.value}
                </Text>
            </View>
        )
    }
}

export default Display