import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

// import Primeiro from './components/Primeiro'
// import Comp, { Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'


export default () => (
    <View style={style.App}>
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        {/* <MinMax min={3} max={20} />
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