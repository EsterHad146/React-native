import React, {Component} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      feed:[
        {id: '1', nome:'Harry Potter', idade: 35, email: 'harry@hogwarts.com'},
        {id: '2', nome:'Tony Stark', idade: 55, email: 'tony@starkindustries.com'},
        {id: '3', nome:'Jon Snow', idade: 32, email: 'jonsnow@winterfell.com'},
        {id: '4', nome:'Eleven', idade: 17, email: 'eleven@hawkins.com'},
        {id: '5', nome:'Luke Skywalker', idade: 60, email: 'luke@jedi.com'},
        {id: '6', nome:'Darth Vader', idade: 70, email: 'vader@empire.com'},
        {id: '7', nome:'Sherlock Holmes', idade: 40, email: 'sherlock@bakerstreet.com'},
        {id: '8', nome:'Jack Sparrow', idade: 45, email: 'jack@blackpearl.com'},
        {id: '9', nome:'Daenerys Targaryen', idade: 30, email: 'daenerys@dragonstone.com'},
        {id: '10', nome:'Walter White', idade: 58, email: 'walter@heinsberg.com'},
      ]
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Pessoa data={item} />} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:50
  },
  areaPessoa:{
    backgroundColor:'#222',
    height:200,
    marginBottom:15
  },
  textoPessoa:{
    color:'#fff',
    fontSize:20
  }
});

export default App;

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome:{this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade:{this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email:{this.props.data.email}</Text>
      </View>
    );
  }
}

//FlatList = feed(barra de rolagem)
