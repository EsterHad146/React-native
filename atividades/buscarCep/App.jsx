import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { buscarEnderecoPorCep } from './src/api';


export default function App() {

  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState(null)
  const inputRef = useRef(null)


  const buscarEndereco = async () => {
    try {
      const dadosEndereco = await buscarEnderecoPorCep(cep);
      setEndereco(dadosEndereco);
      Keyboard.dismiss()
    } catch (error) {
      console.error('Erro ao buscar o endereço: ', error)
    }
  }
  const limparEndereco = () => {
    setCep('')
    setEndereco(null)
    Keyboard.dismiss()
    inputRef.current.focus()
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Buscar o endereço</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o CEP'
        value={cep}
        onChangeText={setCep}
        keyboardType='numeric'
        ref={inputRef} //referenciado(destacando) a caixa de texto
      />
      <View style={styles.areaButton}>
        <TouchableOpacity style={styles.areaButton}
          onPress={buscarEndereco}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.areaButton}
          onPress={limparEndereco}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {endereco && ( //condicional
        <View style={styles.result}>
          <Text style={styles.resultText}>Rua: {endereco.logradouro}</Text>
          <Text style={styles.resultText}>Bairro: {endereco.bairro}</Text>
          <Text style={styles.resultText}>Cidade: {endereco.localidade}</Text>
          <Text style={styles.resultText}>Estado: {endereco.estado}</Text>

        </View>
      )}



    </SafeAreaView>
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
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
  areaButton:{
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection:'row',
    padding:10,
    marginHorizontal:5
  }
})
