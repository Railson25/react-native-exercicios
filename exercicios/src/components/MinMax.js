import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'

export default props => (
    <Text style={Style.font}>
         O valor {props.max} é maior que {props.min}!
     </Text>
)