import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from "react-native";
import Slider from '@react-native-community/slider';


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            nome: '',
            idade: '',
            limite: 250,
            estudante: false
        };
        this.enviarDados = this.enviarDados.bind(this)
    }

    enviarDados() {
        if (this.state.nome === '' || this.state.idade === '') {
            alert('Insira os dados corretamente')
            return;
        }
        alert(
            'Conta aberta com sucesso!! \n\n' +
            'Nome: ' + this.state.nome + '\n' +
            'Idade: ' + this.state.idade + '\n' +
            'Limite Conta: ' + this.state.limite.toFixed(2) + '\n' +
            'Conta Estudante: ' + (this.state.estudante ? 'Ativo' : 'Inativo')
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bancoLogo}>Banco Fictício</Text>

                <View style={styles.areaFormulario}>
                    <Text style={styles.textNome}>Nome:</Text>
                    <TextInput
                        placeholder="Digite seu nome"
                        underlineColorAndroid="transparent"
                        onChangeText={(texto) => this.setState({ nome: texto })}
                        style={styles.input}
                    />

                    <Text>Idade:</Text>
                    <TextInput
                        placeholder="Digite sua idade"
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                        onChangeText={(texto) => this.setState({ idade: texto })}
                        style={styles.input}
                    />
                </View>

                <View style={styles.limiteArea}>
                    <Text>Seu Limite:</Text>
                    <Text style={styles.limiteTexto}>R$ {this.state.toFixed(0)}</Text>
                </View>

                <View style={styles.areaSlider}>
                    <Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={250}
                        maximumValue={4000}
                        step={1}
                        value={this.state.limite}
                        onValueChange={(limite) => this.setState({ limite: limite })}
                        minimumTrackTintColor="#234654"
                    />
                </View>

                <View style={areaEstudante}>
                    <Text>Estudante:</Text>
                    <Switch
                        style={{ paddingTop: 15 }}
                        trackColor='#234654'
                        value={this.state.estudante}
                        onValueChange={(valorEstudante) => this.setState({ estudante: valorEstudante })}
                    />
                </View>

                <TouchableOpacity onPress={this.enviarDados} style={styles.button}>
                    <Text style={styles.buttonText}>Abrir Conta</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
    },
    input: {
        width: 250,
        height: 38,
        borderWidth: 1,
        borderColor: "#999999",
        backgroundColor: "#EEEE",
        color: "#0000",
        borderRadius: 4,
        padding:10,
        marginTop: 5,
        marginBottom: 5
    },
    textNome:{
        fontSize: 17,
        color:"#000",
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    areaEstudante:{
        flexDirection:'row',
        alignItems:'center'
    },
    areaSlider:{
        flexDirection:'row',
        paddingBottom:5
    },
    limiteArea:{
        flexDirection:'row',
        paddingBottom:5
    },
    areaFormulario:{
        flexDirection: 'column',
        margin:10
    },
    bancoLogo:{
        textAlign: 'center',
        fontSize:30,
        fontWeight:'bold',
        color: '#000'
    },
    limiteTexto:{
        color:"#000",
        fontSize:17,
        fontWeight:'bold',
        paddingLeft:5
    }
})
