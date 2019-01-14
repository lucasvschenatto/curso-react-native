import React from 'react';
import {View,Text} from 'react-native';
import Standard from '../stile/Standard';

const Invert = props => {
    const inv = props.text.split('').reverse().join('');
    return <Text style={Standard.ex}>{inv}</Text>;
}

const Hi = () => {
    return <Text style={Standard.ex}>Hi there!</Text>;
}

const functionThree = function(){return 3};


const MegaSena = props => {
    const [min, max] = [1, 60];
    const numbers = Array(props.numbers).fill(0)

    for(let i = 0; i<numbers.length; i++){
        let newNumber = 0;
        while(numbers.includes(newNumber)){
            newNumber = Math.floor(Math.random() * (max-min + 1)) + min;
        }
        numbers[i] = newNumber;
    }
    numbers.sort( (a,b) => a - b);
    return <Text style={Standard.ex}>{numbers.join(', ')}</Text>;
}

export default Invert;
export {Hi, MegaSena, functionThree};