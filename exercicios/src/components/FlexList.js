import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const students = [
    {id: 1, name: 'John', grade: 7.9},
    {id: 2, name: 'Mary', grade: 8},
    {id: 3, name: 'Lucy', grade: 5.8},
    {id: 4, name: 'Taylor', grade: 6.9},
    {id: 5, name: 'Harry', grade: 7.2},
    {id: 6, name: 'Gary', grade: 10},
    {id: 7, name: 'Carl', grade: 5.8},
    {id: 8, name: 'Kira', grade: 6.9},
    {id: 9, name: 'Vic', grade: 7.2},
    
    {id: 11, name: 'John', grade: 7.9},
    {id: 12, name: 'Mary', grade: 8},
    {id: 13, name: 'Lucy', grade: 5.8},
    {id: 14, name: 'Taylor', grade: 6.9},
    {id: 15, name: 'Harry', grade: 7.2},
    {id: 16, name: 'Gary', grade: 10},
    {id: 17, name: 'Carl', grade: 5.8},
    {id: 18, name: 'Kira', grade: 6.9},
    {id: 19, name: 'Vic', grade: 7.2}
];

const itemStyle = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    // Flex
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
}

class Student extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <View style={itemStyle}>
            <Text>Name: {this.props.name}</Text>
            <Text style={{fontWeight:'bold'}}>Grade: {this.props.grade}</Text>
        </View>
    }
}

const FlexList = props => {
    const renderItem = ({item}) => {
        return <Student {...item} />
    }

    return (
        <ScrollView>
            <FlatList
                data={students}
                renderItem={renderItem}
                keyExtractor={(_,index) => index.toString()}
                />
        </ScrollView>
    )
}

export { Student}
export default FlexList