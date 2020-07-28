import React, { useState } from 'react'
import { Text } from 'react-native'
import Style from '../estilo'

import ContadorDisplay from './ContadorDisplay'
import ContaadorBotoes from './ContadorBotoes'
import ContadorBotoes from './ContadorBotoes'

export default props => {

    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text style={Style.font}>
                Contador v2
            </Text>
            <ContadorDisplay num={num} />
            <ContadorBotoes inc={inc} dec={dec} />
        </>
    )
}