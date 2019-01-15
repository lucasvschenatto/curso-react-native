import React, { Component } from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class Counter extends Component {
    state = {
        number:this.props.initialNumber
    }

    // if constructor is declared, it has to call super with props
    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }

    addOne = () => {
        this.setState({number: this.state.number + 1});
    }

    clear = () => {
        this.setState({number: this.props.initialNumber});
    }

    render(){
        return (
            <View>
                <Text 
                    style={{fontSize: 40}}
                    onPress={()=>this.addOne()}
                    >
                    {this.state.number}</Text>
                <TouchableHighlight
                    onPress={this.addOne}
                    onLongPress={this.clear}
                    >
                    <Text>Increment/Clear</Text>
                </TouchableHighlight>
            </View>
        )
    }
}