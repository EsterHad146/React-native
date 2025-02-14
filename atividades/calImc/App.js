import { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import calculateIMC from "./src/api";


export default function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState(null); // Estado para armazenar o IMC

  const calcular = async () => {
    if (!altura || !peso) {
      Alert.alert('Erro', 'Por favor, insira a altura e o peso.');
      return;
    }

    try {
      const result = await calculateIMC(altura, peso); // Chama a API com os dados
      setResultadoIMC(result); // Armazena o resultado da API
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Calculadora de IMC</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Digite sua Altura (em metros)"
          value={altura}
          onChangeText={setAltura}
          style={styles.textInput}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Digite seu Peso (em kg)"
          value={peso}
          onChangeText={setPeso}
          style={styles.textInput}
        />
      </View>
      <View>
        <TouchableOpacity onPress={calcular} style={styles.button}>
          <Text style={styles.textButton}>Calcular o IMC</Text>
        </TouchableOpacity>
      </View>
      {resultadoIMC && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Seu IMC: {resultadoIMC.bmi}</Text>
          <Text style={styles.resultText}>Categoria: {resultadoIMC.health}</Text>
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
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 10,
    width: 200,
    margin: 5,
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#222',
    width: 150,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  textButton: {
    color: '#fff',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
  },
});
