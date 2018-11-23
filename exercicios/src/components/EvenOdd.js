import React from 'react';
import {View, Text} from 'react-native';
import Standard from '../stile/Standard';

export default class EvenOdd extends React.Component{
    render (){
        return(
            <View>
                this.props.number % 2 == 0
                ? <Text style={Standard}>Par</Text>
                : <Text style={Standard}>Impar</Text>;
            </View>
            
        )
    }
}