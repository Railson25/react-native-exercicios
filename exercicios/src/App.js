import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import FlexboxV1 from './components/layout/FlexboxV1'


// import ListaProdutos from './components/produtos/ListaProdutos'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'

// import UsuarioLogado from './components/UsuarioLogado'

// import Primeiro from './components/Primeiro'
// import Comp, { Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import Frag from './components/Frag'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai'
// import Pai from './components/indireta/Pai'
// import ContadorV2 from './components/contador/ContadorV2'
// import Diferenciar from './components/Diferenciar'
// import ParImpar from './components/ParImpar'
// import Pai from './components/relacao/Pai'
// import Filho from './components/relacao/Filho'

export default () => (
    <SafeAreaView style={style.App}>
        <FlexboxV1 />
        {/* <Botao />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={ {nome: 'Gui', email:'gui@gui.com'} } />
        <UsuarioLogado usuario={ {nome: 'Gui', email:''} } />
        <UsuarioLogado usuario={ {nome: '', email:'carlos@empresa.com'} } />
        <UsuarioLogado usuario={ null } />
        <Pai>
            <Filho nome="Bia" sobrenome="Aruuda" />
            <Filho nome="Carlos" sobrenome="Aruuda" />
        </Pai>
        <Pai>
            <Filho nome="Ana" sobrenome="Silva" />
            <Filho nome="Julia" sobrenome="Silva" />
        </Pai>
        <ParImpar num={3} />
        <Diferenciar />
        <ContadorV2 />
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
    </SafeAreaView>
)    

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})