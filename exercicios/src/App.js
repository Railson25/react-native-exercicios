import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

// import Primeiro from './components/Primeiro'
// import Comp, { Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Frag from './components/Frag'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import Pai from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'


export default () => (
    <View style={style.App}>
        <ContadorV2 />
        {/* <Botao />
        <Pai />
        <Pai />
        <Contador inicial={100} passo={13} />
        <Contador />
        <Frag principal="Cadastro" secundario="Tela de cadastro" />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <MinMax min={3} max={20} />
        <Comp />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)    

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})