import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Standard from '../style/Standard'

const Input = props =>
    <View>
        <TextInput value={props.text}
            style={Standard.input}
            onChangeText={props.callOnChange}
            />
    </View>

class SyncronizedText extends Component {
    state = {
        text:''
    }

    changeText = text =>{
        this.setState({text})
    }

    render(){
        return(
            <View>
                <Text style={Standard.font40}>{this.state.text}</Text>
                <Input
                    text={this.state.text}
                    callOnChange={this.changeText}
                />
            </View>
        )
    }
}

export {Input, SyncronizedText}
export default SyncronizedText