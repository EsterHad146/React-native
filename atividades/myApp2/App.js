import 'react-native-gesture-handler'; // Deve ser a primeira linha
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
