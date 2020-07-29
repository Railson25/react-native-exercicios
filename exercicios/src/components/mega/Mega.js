import React, { Component } from 'react'
import { Text } from 'react-native'
import Style from '../estilo'

export default class Mega extends Component {

    render(){
        return(
            <Text style={Style.font}> 
                Componente Classe {this.props.qtdeNumeros}
            </Text>
        )
    }
}