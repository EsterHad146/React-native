import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { buscarFeriados } from './src/Api';

export default App = () => {
  const [ano, setAno] = useState('2025'); // Define um ano padrão
  const [feriados, setFeriados] = useState([]);

  const buscarDados = async () => {
    try {
      const dados = await buscarFeriados(ano);
      setFeriados(dados);
      Keyboard.dismiss();
    } catch (error) {
      alert('Erro ao buscar os feriados. Verifique o ano e tente novamente.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Buscar Feriados por Ano</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o ano"
        value={ano}
        onChangeText={setAno}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={buscarDados}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
      
      <FlatList
        data={feriados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.date} - {item.name} ({item.type})</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});
