import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Text, Image, StyleSheet } from "react-native";
import geradorImagem from "./src/api";

export default function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState(null);  // Estado para armazenar a URL da imagem

  const handleGerarImagem = async () => {
    try {
      const url = await geradorImagem(input);  // Chama a função e armazena a URL retornada
      setImageUrl(url);  // Atualiza o estado com a URL da imagem
    } catch (error) {
      console.error("Erro ao gerar a imagem:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Descreva alguma coisa"
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />

      <TouchableOpacity onPress={handleGerarImagem} style={styles.button}>
        <Text style={styles.buttonText}>Gerar Imagem</Text>
      </TouchableOpacity>

      {imageUrl && (
        <Image 
          source={{ uri: imageUrl }}  // Exibe a imagem gerada
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    width: "100%",
    marginBottom: 16
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  image: {
    marginTop: 16,
    width: 300,
    height: 300,
    resizeMode: "contain"  // Garante que a imagem se ajuste ao tamanho
  }
});
