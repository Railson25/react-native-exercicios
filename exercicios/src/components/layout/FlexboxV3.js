import React from 'react'
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor='#ff801a' lado={20} />
            <Quadrado cor='#50d1f6' lado={30} />

            <Quadrado cor='#dd22c1'lado={40} />
            <Quadrado cor='#8312ed'lado={50} />
            <Quadrado cor='#36c9a7' lado={60} />
        </View>
    )
}

const style =  StyleSheet.create({
    FlexV3: {
        height: 350,
        width: '100%',
        backgroundColor: '#000',
        flexDirection: "row-reverse",
        flexDirection: "column",
        flexDirection: "column-reverse",
        flexDirection: "row",
        justifyContent: "center",
        justifyContent: "flex-end",
        justifyContent: "flex-start",
        justifyContent: "space-around",
        justifyContent: "space-between",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignItems: 'flex-end',
        alignItems: "baseline",
        alignItems: "flex-start",
        alignItems: "stretch"
    }
})