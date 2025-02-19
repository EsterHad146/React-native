import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Feather
        name="users"
        size={45}
        color="#FF0000"
      />

      <TouchableOpacity>
        <FontAwesome
          name="camera"
          size={50}
          color="#F23045"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
