import React, { useState, useRef } from "react";
import { View, Button, Image, Text, StyleSheet } from "react-native";
import { Audio, Video } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as Camera from "expo-camera";

export default function App() {
  // Estados do aplicativo
  const [image, setImage] = useState(null);
  const [recording, setRecording] = useState(null);
  const [sound, setSound] = useState(null);
  const [videoUri, setVideoUri] = useState(null);
  const cameraRef = useRef(null);

  // Função para selecionar uma imagem da galeria
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: [ImagePicker.MediaType.IMAGE], // Alterado para ImagePicker.MediaType
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Função para tirar uma foto com a câmera
  const takePhoto = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      let photo = await cameraRef.current.takePictureAsync();
      setImage(photo.uri);
    } else {
      alert("Permissão para acessar a câmera negada");
    }
  };

  // Função para gravar áudio
  const startRecording = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permissão para acessar o microfone negada");
        return;
      }

      // Define o modo de gravação de áudio
      await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
    } catch (error) {
      console.error("Erro ao gravar áudio", error);
    }
  };

  // Função para parar a gravação e salvar o áudio
  const stopRecording = async () => {
    if (!recording) return;
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setRecording(null);
    setSound(uri);
  };

  // Função para reproduzir o áudio gravado
  const playSound = async () => {
    if (!sound) return;
    const { sound: playback } = await Audio.Sound.createAsync(
      { uri: sound },
      { shouldPlay: true }
    );
    await playback.playAsync();
  };

  // Função para selecionar um vídeo da galeria
  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: [ImagePicker.MediaType.VIDEO], // Alterado para ImagePicker.MediaType
      allowsEditing: true,  // Permitir edição do vídeo
    });

    if (!result.canceled) {
      setVideoUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Escolher Imagem" onPress={pickImage} style={styles.button} />
      <Button title="Tirar Foto" onPress={takePhoto} style={styles.button} />
      <Button title="Escolher Vídeo" onPress={pickVideo} style={styles.button} />
      <Button
        title={recording ? "Parar Gravação" : "Gravar Áudio"}
        onPress={recording ? stopRecording : startRecording}
        style={styles.button}
        disabled={recording}  // Desabilitar enquanto estiver gravando
      />
      <Button title="Tocar Áudio" onPress={playSound} disabled={!sound} style={styles.button} />

      {image && <Image source={{ uri: image }} style={styles.image} />}
      {videoUri && <Video source={{ uri: videoUri }} style={styles.video} useNativeControls />}
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  button: {
    marginVertical: 10,
    width: 250,
    padding: 10,
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  video: {
    width: 300,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});

