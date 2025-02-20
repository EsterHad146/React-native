import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/pages/Home';
import Contato from './src/pages/Contatos';
import Sobre from './src/pages/Sobre';
import Pesquisa from './src/pages/Pesquisa';
import Feather from '@expo/vector-icons/Feather'

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        //Configuração do menu de opções
        screenOptions={{
          headerShown: false, //cabeçalho
          tabBarHideOnKeyboard: true, //esconder menu quando o teclado estiver ativado
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFF',

          tabBarStyle: {
            backgroundColor: '#202225',
            borderTopWidth: 0
          }
        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather
                name='home'
                color={color}
                size={size} />
            },
          }}
        />
        <Tab.Screen
          name='Sobre'
          component={Sobre}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather
                name='file-text'
                color={color}
                size={size} />
            },
          }}
        />
        <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            //headerShown:false,
            tabBarIcon: ({ color, size }) => {
              return <Feather
                name='phone-call'
                color={color}
                size={size} />
            },
          }}
        />
        <Tab.Screen
          name='Pesquisa'
          component={Pesquisa}
          options={{
            //headerShown:false,
            tabBarIcon: ({ color, size }) => {
              return <Feather
                name='search'
                color={color}
                size={size} />
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


