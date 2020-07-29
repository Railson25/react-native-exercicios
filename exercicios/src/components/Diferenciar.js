import React from 'react'
import { Text, Platform } from 'react-native'
import Style from './estilo'

export default _ => {

    if(Platform.OS === 'android') {
       return <Text style={Style.font}> Android </Text>
    } else if(Platform.OS === 'ios') {
        return <Text style={Style.font}> IOS </Text>
    } else {
     return <Text style={Style.font}> Eita!!</Text>
    }   
}