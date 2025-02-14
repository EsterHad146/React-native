import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { buscarMoedas, buscarTaxaCambio } from './src/Api';
import CaixaSelecao from './src/CaixaSelecao'

export default App = () => {
  // Estado para armazenar o valor em reais digitado pelo usuário
  const [valor, setValor] = useState('');
  // Estado para armazenar a moeda selecionada pelo usuário, com valor inicial 'USD'
  const [moeda, setMoeda] = useState('USD');
  // Estado para armazenar a taxa de câmbio obtida da API
  const [taxaCambio, setTaxaCambio] = useState(null);
  // Estado para armazenar o valor convertido com base na taxa de câmbio
  const [valorConvertido, setValorConvertido] = useState(null);
  // Estado para armazenar a lista de moedas disponíveis obtidas da API
  const [moedas, setMoedas] = useState([]);

  useEffect(()=>{
    const obterMoedas = async () =>{
      let dados = await buscarMoedas();
      dados = [dados.URD.code, dados.EUR.code, dados.BTC.code]
      console.log(dados)
      //setMoedas(dados)
    }
    obterMoedas();
  },[])

  const converterValor= async()=>{

  }
  const limparTela= async()=>{

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={valor}
        onChangeText={setValor}
        placeholder='Digite o valor em reais R$'
      />

      <CaixaSelecao
        moedas={moedas}
        moedaSelecionada={moeda}
        onChangeMoeda={setMoeda}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={converterValor}>
        <Text style={styles.buttonText}>Converter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={limparTela}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

