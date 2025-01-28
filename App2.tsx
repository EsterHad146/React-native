import React, {Component} from "react";
import { View, Text, Image } from "react-native";

class App extends Component {
  render(){
    let nome = "Jarvis";

    return(
      <View>
        <Text>Olá Mundo!!</Text>
        <Text>Meu primeiro App!!</Text>
        <Text style={{ color: "#FF0000" , fontSize: 25, margin: 15}}>TII 4</Text>
        <Text style={{ fontSize:30 }}> {nome} </Text>

        <IA largura={300} altura={200} fulano="Jarvis" />

      </View>
    );
   }
}

export default App;

class IA extends Component {
  render(){
    let img= "https://fmnews.com.br/wp-content/uploads/2018/09/Inteligencia-Artificial.jpg"
    
    return(
      <View>
        <Image source={{uri: img}}
              style={{ width: this.props.largura, height: this.props.altura}} />
        <Text>{this.props.fulano}</Text>
      </View>
    )
  }
}
