import React from 'react'
import { Text, FlatList } from 'react-native'
import Style from '../estilo'

import Produtos from './Produtos'

export default props => {

    const prodtoRender = ({item}) => {
        return <Text>{item.id} {item.nome} </Text>
    }

    return (
        <>
            <Text style={Style.font}>Lista de Produtos V2</Text>
            <FlatList 
                data={Produtos}
                keyExtractor={item => `${item.id}`}
                renderItem={prodtoRender}
            />
        </>    
    )
}