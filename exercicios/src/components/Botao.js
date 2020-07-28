import React from 'react'
import { Button } from 'react-native'

export default props => {

    function executar () {
        console.warn("executar")
    }

    return (
        <Button title="executar!" onPress={executar} >

        </Button>
    )
}