import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'

export default function Comp() {
    return <Text style={Style.font}> Componente</Text>
}

export function Comp1() {
    return <Text style={Style.font}>Comp 1</Text>
}

 function Comp2() {
    return <Text style={Style.font}>Comp 2</Text>
}

export { Comp2 }
