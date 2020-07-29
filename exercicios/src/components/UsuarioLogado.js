import React from 'react'
import { Text } from 'react-native'
import Style from './estilo'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && Object.keys(usuario). length !== 0}>
                <Text style={Style.font}>Usuario Logado:</Text>
                <Text style={Style.font}>{usuario.nome} {usuario.email}</Text>
            </If>
        </>
    )
}