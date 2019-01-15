import React from 'react';
import {Button, Alert, ToastAndroid, Platform, View} from 'react-native';

export default props => {
    const notify = msg =>{
        if(Platform.OS === 'android'){
            ToastAndroid.show(msg.concat(' é android'),ToastAndroid.LONG);
        } else{
            Alert.alert('Informação', msg)
        }

    }

    return (
            <Button
                title='Platform?'
                onPress = {() =>  notify('Plataforma verificada')}
                />
    )
}