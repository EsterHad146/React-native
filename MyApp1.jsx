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
    this.setState({nome:'Bem-vindo: ' + this.state.input + '!'});
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.input} 
          placeholder="Digite seu nome: "
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({input:texto})}
          />
        <Button style={styles.input}
          title="Entrar" 
          onPress={this.entrar}/>
        <Text style={styles.text}>{this.state.nome}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#0D8A9E"
      
    },
    text:{
      fontSize:20,
      color:"#E5F9F8",
      fontStyle:'italic',
      fontFamily:'Verdana',
      marginTop:40
    },
    input:{
      color:'#1F282D',
      height:45,
      borderWidth:3,
      borderColor:'#E5F9F8',
      marginBottom:10,
      fontSize:20,
      padding:10,
      borderRadius:10
    }
})

export default App;

