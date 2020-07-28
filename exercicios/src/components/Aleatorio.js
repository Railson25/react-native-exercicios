import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'

export default props => {
    const { min, max } = props
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
  
    return (
        <Text style={Style.font}>
            O valor aleatório é {aleatorio}
        </Text>
    )
}