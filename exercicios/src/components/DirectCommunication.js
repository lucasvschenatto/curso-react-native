import React from 'react'
import {View,Text} from 'react-native'

const font = {style: {fontSize:30}}

function sonWithProps(props){
    return React.Children.map(
        props.children,
        c => React.cloneElement(c, {...props, ...c.props})
    )
}

const Son = props =>
    <View>
        <Text {...font}>Son: {props.name} {props.lastName}</Text>
    </View>

const Father = props =>
    <View>
        <Text {...font}>Father: {props.name} {props.lastName}</Text>
        {/* {props.children} */}
        {sonWithProps(props)}
    </View>

const GrandFather = props =>
    <View>
        <Text {...font}>GrandFather:  {props.name} {props.lastName}</Text>
        <Father name='Andrew' lastName={props.lastName}>
            <Son name='Ana'/>
            <Son name='Gui'/>
            <Son name='David'/>
        </Father>
        <Father {...props} name='Peter'>
            <Son name='Rebeca'/>
            <Son name='Reinald'/>
        </Father>
    </View>

export default GrandFather
export {Son,Father,GrandFather}