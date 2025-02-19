import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //empilhamento de páginas

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import Contatos from "./src/pages/Contatos";

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home} 
          
          options={{
            title:'Tela de Início',
            headerStyle:{
              backgroundColor:'#124796'
            },

            headerTintColor:'#fff',
            //headerShown: false  //cabeçalho
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}  
          
          options={{
            title:'Página Sobre'
          }}
        />
        <Stack.Screen
          name="Contatos"
          component={Contatos}  
          
          options={{
            title:'Página Contatos'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}