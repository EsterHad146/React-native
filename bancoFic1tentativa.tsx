import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, SafeAreaView } from "react-native";
import Slider from '@react-native-community/slider';
import DropDownPicker from 'react-native-dropdown-picker';

const App = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [valor, setValor] = useState(250);
  const [isEnabled, setIsEnabled] = useState(false);
  const [inputNome, setInputNome] = useState('');
  const [inputIdade, setInputIdade] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Feminino', value: 'feminino' },
    { label: 'Masculino', value: 'masculino' },
  ]);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const criarConta = () => {
    setNome(inputNome);
    setIdade(inputIdade);
    alert('Registros salvos');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Nome:</Text>
        <TextInput
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => setInputNome(texto)}
          value={inputNome}
          style={styles.input}
        />

        <Text>Idade:</Text>
        <TextInput
          placeholder="Digite sua idade"
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          onChangeText={(idadeAtual) => setInputIdade(idadeAtual)}
          value={inputIdade}
          style={styles.input}
        />

        <Text>Gênero:</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Selecione o gênero"
          style={styles.picker}
        />
        <Text>Gênero Selecionado: {value ? value : 'Nenhum'}</Text>

        <Text>Seu Limite:</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={250}
          step={1}
          value={valor}
          onValueChange={(val) => setValor(val)}
          minimumTrackTintColor="#234654"
          maximumTrackTintColor="#000000"
        />

        <Text>Sou Estudante:</Text>
        <Text>{isEnabled ? 'Sim' : 'Não'}</Text>
        <Switch
          trackColor={{ false: 'gray', true: 'blue' }}
          thumbColor={isEnabled ? 'white' : 'black'}
          ios_backgroundColor="gray"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

        <TouchableOpacity onPress={criarConta} style={styles.button}>
          <Text style={styles.buttonText}>Abrir Conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  picker: {
    width: 250,
    marginVertical: 10,
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
});
