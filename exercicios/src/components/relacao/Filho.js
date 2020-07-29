import React from 'react'
import { Text } from 'react-native'
import Style from '../estilo'

export default props => {
    return (
        <Text style={Style.font}>
            {props.nome} {props.sobrenome}
        </Text>
    )
}