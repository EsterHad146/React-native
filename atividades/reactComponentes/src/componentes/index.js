import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity, Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from '@react-native-community/slider';
import styles from "./style";

// Componente de Título
class Titulo extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>{this.props.text}</Text>
            </View>
        );
    }
}

//Componente de Input
class CaixaTexto extends Component {
    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome: "
                    underlineColorAndroid="transparent"
                    onChangeText={(null)}
                    value={null} />
            </View>
        )
    }
}

// Componente de Botão
class Botao extends Component {
    render() {
        const { text, clicado } = this.props;
        return (
            <View>
                <TouchableOpacity style={styles.button} onPress={clicado} activeOpacity={0.8}>
                    <Text>{text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// Componente de Container (padroniza o layout das telas)
class Container extends Component {
    render() {
        return <View style={styles.container}>{this.props.children}</View>;
    }
}

// Componente Caixa de Seleção
class CaixaSelecao extends Component {
    render() {
        const { moedas = [], moedaSelecionada, onChangeMoeda, style = {} } = this.props;
        return (
            <Picker
                selectedValue={moedaSelecionada}
                style={[{ height: 50, width: "100%", marginBottom: 20 }, style]}
                onValueChange={(itemValue) => onChangeMoeda(itemValue)}
            >
                {moedas.map((moeda) => (
                    <Picker.Item key={moeda} label={moeda} value={moeda} />
                ))}
            </Picker>
        );
    }
}

// Componente de Controle Deslizante (Slider)
class ControleDeslizante extends Component {
    constructor(props) {
        super(props);
        this.state = { limite: props.valorInicial || 250 }; // Define um valor inicial
    }

    render() {
        return (
            <View>
                <Text>Limite: {this.state.limite}</Text>
                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={250}
                    maximumValue={4000}
                    step={1}
                    value={this.state.limite}
                    onValueChange={(limite) => this.setState({ limite })}
                    minimumTrackTintColor="#234654"
                />
            </View>
        );
    }
}

// Componente de Alternância (Switch)
class AlternarEstudante extends Component {
    constructor(props) {
        super(props);
        this.state = { estudante: props.valorInicial || false }; // Define um valor inicial
    }

    render() {
        return (
            <View>
                <Text>É estudante? {this.state.estudante ? "Sim" : "Não"}</Text>
                <Switch
                    style={{ paddingTop: 15 }}
                    trackColor={{ true: "#234654", false: "#ccc" }}
                    value={this.state.estudante}
                    onValueChange={(valorEstudante) => this.setState({ estudante: valorEstudante })}
                />
            </View>
        );
    }
}

// Exportação correta dos componentes
export { Titulo, CaixaTexto, Botao, Container, CaixaSelecao, ControleDeslizante, AlternarEstudante };

