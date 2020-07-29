import React from 'react'
import { Text } from 'react-native'
import Style from '../estilo'

import Produtos from './Produtos'

export default props => {

    function obertLista() {
        return Produtos.map(p => {
            return (
                <Text key={p.id}> 
                    {p.id}) {p.nome} tem R$ {p.preco}
                </Text>
            )
        })
    }

    return (
        <>
            <Text style={Style.font}>Lista de Produtos</Text>
             {obertLista()}
        </>    
    )
}