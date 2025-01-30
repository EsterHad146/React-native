import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      username: '',
      password: '',
      mensenger: ''
    };

    this.login = this.login.bind(this);
  }

  login(){
    const {username, password} = this.state;
    if (username === '') {
      alert('Por favor, preencha seu nome no campo de usuário!');
      return;
    }

    if (password === '') {
      alert('Por favor, coloque sua senha!');
      return;
    }

    this.state({mensenger: `Bem-vindo, ${username}!`})
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder="Nome de usuário"
        underlineColorAndroid="transparent"
        onChangeText={(texto) => this.setState({username: texto})}/>
        <TextInput style={styles.input}
        placeholder="Senha"
        underlineColorAndroid="transparent"
        secureTextEntry //oculta a senha
        onChangeText={(texto) => this.setState({password: texto})}/>
        <Button style={styles.button}
        title="Entrar" 
        onPress={this.login}/>
        {this.state.mensenger ? <Text style ={styles.text}>{this.state.mensenger}</Text> : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center', //vertical
      alignItems:'center', //horizontal
      padding:20,
      backgroundColor:'#997653'
    },
    button:{
      backgroundColor:'#7D4C22',
      color:'#C2B39F',
      textAlign:'center',
      fontSize:25,
      marginTop:20

    },
    input:{
      color:'#B49978',
      width:100,
      height:45,
      borderWidth:1,
      borderColor:'#2E1E12',
      marginBottom:20,
      fontSize:10,
      padding:10
    },
    text:{
      color:'#C2B39F',
      fontSize:20,
      textAlign:'center'
    }
})
export default App;
