import React from 'react';
import { View, Text } from 'react-native';

export default class Simple extends React.PureComponent{
    render(){
        return (
            <View>
                <Text>{this.props.customText}</Text>
                <Text>second time: {this.props.customText}</Text>
            </View>
            
        )
    }
}