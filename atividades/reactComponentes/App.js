import React from "react";
import {Titulo,Botao} from "./src/componentes";
import {View} from 'react-native'

const App = () => {
  const funcaoClicque =()=>{
    alert('O botão foi clicado')
  }
  return(
    <View>
       <Titulo text="Boas Vindas"/>
       <Botao text="Clique Aqui" onPress={funcaoClicque}/>

    </View>
  )
}

export default App
