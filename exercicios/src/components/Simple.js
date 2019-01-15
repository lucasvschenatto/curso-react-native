import React from 'react';
import { View, Text } from 'react-native';
import Standard from '../style/Standard';
export default class Simple extends React.PureComponent{
    render(){
        return (
            <View>
                <Text style={Standard.ex}>{this.props.customText}</Text>
                <Text>second time: {this.props.customText}</Text>
            </View>
            
        )
    }
}