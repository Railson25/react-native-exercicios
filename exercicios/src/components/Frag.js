import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'

export default props  => {
    return (
        <React.Fragment>
            <Text style={Style.font}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </React.Fragment>
    )
}
