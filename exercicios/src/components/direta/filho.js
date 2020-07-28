import React from 'react'
import { Text } from 'react-native'
import Style from '../estilo'

export default props => {
    return (
        <>
            <Text style={Style.font}>{props.a}</Text>
            <Text style={Style.font}>{props.b}</Text>
        </>
    )
}