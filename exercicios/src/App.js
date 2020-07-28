import React from 'react'
import { View, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro'
import Comp, { Comp1, Comp2 } from './components/Multi'


export default () => (
    <View style={style.App}>
        <Comp />
        <Comp1 />
        <Comp2 />
        <Primeiro />
    </View>
)    

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})