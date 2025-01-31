import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class ConversorMoeda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorReal: '',
      cotacaoDolar: '',
      valorConvertido: ''
    };
  }

  converterMoeda = () => {
    const { valorReal, cotacaoDolar } = this.state;
    const valorConvertido = (parseFloat(valorReal) / parseFloat(cotacaoDolar)).toFixed(2);
    this.setState({ valorConvertido });
  };
  
  render() {
    return (
      <View style={estilos.container}>
        <Text style={estilos.titulo}>Conversor de Moeda</Text>
        <TextInput
          style={estilos.entrada}
          placeholder="Valor em R$"
          keyboardType="numeric"
          onChangeText={(valorReal) => this.setState({ valorReal })}
        />
        <TextInput
          style={estilos.entrada}
          placeholder="Cotação do US$"
          keyboardType="numeric"
          onChangeText={(cotacaoDolar) => this.setState({ cotacaoDolar })}
        />
        <Button title="Converter" onPress={this.converterMoeda} />
        {this.state.valorConvertido ? (
          <Text style={estilos.resultado}>Valor em US$: {this.state.valorConvertido}</Text>
        ) : null}
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20
  },
  entrada: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10
  },
  resultado: {
    marginTop: 20,
    fontSize: 20
  }
});

export default ConversorMoeda;
