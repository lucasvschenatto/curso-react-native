import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import Simple from './components/Simple';
import EvenOdd from './components/EvenOdd';
import Invert, { Hi, MegaSena, functionThree } from './components/Multi';
import Counter from './components/Counter';
import Platform from './components/Platform';
import ValidateProps from './components/ValidateProps'
import Event from './components/Event'
import GrandFather from './components/DirectCommunication'
import SyncronizedText from './components/IndirectCommunication'
import FlexList from './components/FlexList'

export default createDrawerNavigator({
    FlexList:{
        screen: FlexList,
        navigationOptions:{title: 'Flex List'}
    },
    IndirectCommunication: {
        screen: SyncronizedText,
        navigationOptions: {title: 'Indirect Communication'}
    },
    DirectCommunication: {
        screen: () => <GrandFather name='Bob' lastName='Silva'/>,
        navigationOptions: {title: 'Direct Communication'}
    },
    Event: {
        screen: Event
    },
    ValidateProps:{
        // screen: Hi,
        screen: () => <ValidateProps label = 'labeleeee' year={190} />,
        navigationOptions: {title: 'Validate Props'}
    },
    Platform:{
        screen: () => <Platform/>
    },
    Counter: {
        screen: () => <Counter initialNumber={15}/>
    },
    MegaSena: {
        screen: () => <MegaSena numbers={8} />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Invert: {
        screen: () => <Invert text='React Native!'/>
    },
    EvenOdd: {
        screen: () => <EvenOdd number={4}/>,
        navigationOptions: {title: 'Even & Odd'}
    },
    Simple:{
        screen: () => <Simple customText='Screen with simple component'/>
    },
    Hi: {
        screen: Hi
    }
}, {drawerWidth: 300});