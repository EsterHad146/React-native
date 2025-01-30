import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input:''};
    this.entrar = this.entrar.bind(this);
  }
  entrar(){
    if(this.state.input === ''){
      alert('Digite seu nome!')
      return;
    }
    this.setState({nome:'Bem-vindo: ' + this.state.input});
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.text} 
          placeholder="Digite seu nome: "
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({input:texto})}
          />
        <Button style={styles.input}
          title="Entrar" 
          onPress={this.entrar}/>
        <Text>{this.state.nome}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
      
    },
    text:{
      fontSize:20,
    },
    input:{
      height:45,
      borderWidth:3,
      borderColor:'#000',
      marginTop:50,
      margin:10,
      fontSize:15,
      padding:10
    }
})

export default App;
