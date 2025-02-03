import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

class ConversorMoeda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorReal: '',
      cotacaoDolar: '',  // Vamos buscar a cotação a partir da API
      valorConvertido: ''
    };
  }
  
  // Função para buscar a cotação do dólar
  fetchData = async () => {
    try {
      const response = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL');
      // A cotação está dentro de `response.data.USDBRL.ask`
      const cotacaoDolar = response.data.USDBRL.ask;
      this.setState({ cotacaoDolar });  // Atualiza o estado com a cotação do dólar
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  // Chamada para a conversão da moeda
  converterMoeda = () => {
    const { valorReal, cotacaoDolar } = this.state;
    if (valorReal && cotacaoDolar) {
      const valorConvertido = (parseFloat(valorReal) / parseFloat(cotacaoDolar)).toFixed(2);
      this.setState({ valorConvertido });
    } else {
      console.log('Por favor, insira um valor e a cotação.');
    }
  };

  // Chama a função fetchData assim que o componente for montado
  componentDidMount() {
    this.fetchData();
  }

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
          value={this.state.cotacaoDolar}  // Exibe a cotação no campo
          editable={false}  // Não deixa o usuário editar a cotação
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
