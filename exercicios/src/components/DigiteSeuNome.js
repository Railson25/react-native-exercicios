import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import Style from './estilo'

export default props => {
    let [nome, setNome] = useState('teste')
    return (
        <View style={Style.font}>
            <Text>{nome}</Text>
            <TextInput 
                placeholder="Digite seu Nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}