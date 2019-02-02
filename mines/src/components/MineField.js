import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

class MineField extends React.Component{
    render(){
        const rows = this.props.board.map( (row, r) => {
            const fields = row.map( (field, c) => {
                return (
                    <Field {...field} key={c}/>
                )
            })
            return (
                <View key={r}>
                    {fields}
                </View>
            )
        })
        return (
            <View style={styles.container}>
                {rows}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#EEE',
    }
})

export default MineField