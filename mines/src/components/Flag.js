import React from 'react'
import { View, StyleSheet } from 'react-native'

class Flag extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={[styles.flagpole, this.props.bigger ? styles.flagpoleBigger : null]} />
                <View style={[styles.flag, this.props.bigger ? styles.flagBigger : null]} />
                <View style={[styles.base1, this.props.bigger ? styles.baseBigger1 : null]} />
                <View style={[styles.base2, this.props.bigger ? styles.baseBigger2 : null]} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:2
    },
    flagpole:{
        position:'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9
    },
    flag:{
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft: 3
    },
    base1:{
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10
    },
    base2:{
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12
    },
    flagpoleBigger:{
        position:'absolute',
        height: 28,
        width: 4,
        backgroundColor: '#222',
        marginLeft: 16
    },
    flagBigger:{
        position: 'absolute',
        height: 10,
        width: 14,
        backgroundColor: '#F22',
        marginLeft: 3
    },
    baseBigger1:{
        position: 'absolute',
        height: 4,
        width: 12,
        backgroundColor: '#222',
        marginLeft: 12,
        marginTop: 20
    },
    baseBigger2:{
        position: 'absolute',
        height: 4,
        width: 20,
        backgroundColor: '#222',
        marginLeft: 8,
        marginTop: 24
    }
})

export default Flag