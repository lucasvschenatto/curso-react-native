import React from 'react'
import {View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    north:{
        flex:1,
        backgroundColor: '#bdf9ed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    center:{
        flex:2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#f2f9bd',
        paddingHorizontal: 15

    },
    south:{
        flex:1,
        backgroundColor: '#bdf9ed',
        alignItems: 'center',
        justifyContent: 'center'

    },
    circle:{
        width: 100,
        height: 100,
        backgroundColor: '#f47f61',
        borderRadius: 50,
    }
});

const Circle = props => <View style={styles.circle}></View>

const Flex = props => {
    return (
        <View style={styles.container}>
            <View style={styles.north}>
                <Circle/>
            </View>
            <View style={styles.center}>
                <Circle/>
                <Circle/>
                <Circle/>
            </View>
            <View style={styles.south}>
                <Circle/>
            </View>
        </View>
    )
}

export default Flex