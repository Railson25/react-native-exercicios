import React from 'react'
import { Text, View } from 'react-native'
import Style from './estilo'

export default ({ num = 0 }) => {
   
    return (
        <View>
             <Text style={Style.font}>O rersultado é </Text>
                {num % 2 === 0
                    ? <Text style={Style.font}>Par</Text>
                    : <Text style={Style.font}>Impar</Text>
                } 
        </View>
    )
 }