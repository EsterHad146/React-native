import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import buscarDadosPorCnpj from './src/funcaoDeBusca';


export default function App() {
  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [endereco, setEndereco] = useState('');
  const [fone, setFone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null); 
  const inputRef = useRef(null);

  const buscarInformacaoes = async () => {
    setError(null); 
    try {
      const dadosCnpj = await buscarDadosPorCnpj(cnpj);
      if (dadosCnpj) { 
        setRazaoSocial(dadosCnpj.razao_social || ''); 
        setNomeFantasia(dadosCnpj.nome_fantasia || '');
        setEndereco(dadosCnpj.endereco || '');
        setFone(dadosCnpj.fone || '');
        setEmail(dadosCnpj.email || '');
      } else {
        setError("CNPJ não encontrado ou dados inválidos.");
      }
    } catch (error) {
      console.error('Erro ao buscar o cnpj: ', error);
      setError("Erro ao buscar CNPJ. Verifique a conexão e tente novamente.");
    }
  };

  const limparInformacaoes = () => {
    setCnpj('');
    setRazaoSocial('');
    setNomeFantasia('');
    setEndereco('');
    setFone('');
    setEmail('');
    setError(null);
    Keyboard.dismiss();
    inputRef.current.focus();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Buscar informações pelo CNPJ</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o CNPJ'
        value={cnpj}
        onChangeText={setCnpj}
        keyboardType='numeric'
        ref={inputRef} 
      />

      <View style={styles.areaButton}>
        <TouchableOpacity style={styles.button} onPress={buscarInformacaoes}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={limparInformacaoes}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>} 

      {razaoSocial !== '' && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Nome: {razaoSocial}</Text>
          <Text style={styles.resultText}>Nome Fantasia: {nomeFantasia}</Text>
          <Text style={styles.resultText}>Endereço: {endereco}</Text>
          <Text style={styles.resultText}>Telefone: {fone}</Text>
          <Text style={styles.resultText}>Email: {email}</Text>
        </View>
      )}
    </SafeAreaView>
  );
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
    width: '50%',
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
})