import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; //biblioteca para ajustar o conteúdo dentro da tela de exibição, ajuda compatibilidade entre dispositivos móveis
import AsyncStorage from '@react-native-async-storage/async-storage';

App = () => {
  const [nome, setNome] = useState('');
  const [inPut, setInPut] = useState('');

  //SALVAR O ÚLTIMO REGISTRO
  // useEffect(() => {
  //   async function salvarNome() {
  //     try {
  //       await AsyncStorage.setItem('ultimoNome', nome);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   salvarNome();
  // }, [nome]);

  //SALVAR O ÚLTIMO REGISTRO
  useEffect(() => {
    try {
      salvarNome = async () => await AsyncStorage.setItem('ultimoNome', nome);
    } catch (error) {
      console.log(error);
    }
    salvarNome();
  }, [nome]);
  
  //RESGATAR O ÚLTIMO REGISTRO
  useEffect(()=>{
    obterNome = async () =>{
      const getNome = await AsyncStorage.getItem('ultimoNome', nome);}
      if (getNome) {
        console.log(getNome)
        setNome(getNome)
      }
      obterNome();
  },[])

  inserirNome = () => {
    setNome(inPut)
    setInPut('')

  }


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>App Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome: "
          underlineColorAndroid="transparent"
          onChangeText={(texto) => setInPut(texto)}
          value={inPut} />

        <TouchableOpacity
          style={styles.button} onPress={inserirNome}>
          <Text style={styles.textButton}>Inserir nome</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{nome}</Text>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#222',
    margin: 10,
    textAlign: 'center'
  },
  textButton: {
    color: '#fff',
    alignItems: 'center',
    padding: 15
  }
})

export default App