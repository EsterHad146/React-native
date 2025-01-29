import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class App extends Component {
    constructor(props) {
        super(props); //serve como parametro para a class Component
        this.state = {
            contador: 0,
        };
    }

    // aumentarClique = () =>{
    //     this.setState({ contador: this.state.contador + 1});
    // };
    // diminuirClique = () =>{
    //         this.setState({ contador: this.state.contador - 1});
    // };

   //***MODO SIMPLIFICADO*** 
    contarClique = (n) => {
        this.setState({ contador: this.state.contador + n });
    };

    render() {
        return (
            <View style={styles.container}>
                <View >
                    <Text style={styles.text}>Você clicou {this.state.contador} vezes</Text>
                </View>

                {/* <TouchableOpacity onPress={this.aumentarClique}>
                    <Text>Somar (+)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.diminuirClique}>
                    <Text>Subtrair (-)</Text>
                </TouchableOpacity> */}

              <View style={styles.containerButton}>
                  {/* MODO SIMPLIFICADO */}
                  <TouchableOpacity 
                    onPress={()=>this.contarClique (1)} 
                    style={styles.button}>
                        <Text style={styles.textButton}>Somar (+)</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>this.contarClique (-1)}
                    style={styles.button}>
                        <Text style={styles.textButton}>Subtrair (-)</Text>
                </TouchableOpacity>
              </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#B6C4CA'           
    },
    text:{
        fontSize:20,
        color:'#954650',
        fontStyle:'italic'
    },
    button:{
        backgroundColor:'#A89294',
        borderRadius:10,
        padding:10,
        marginBottom:10,
        marginTop:5, 
        margin:5      
    },
    textButton:{
        fontSize:20,
        color:'#DDD7D7'
    },
    containerButton:{
        flexDirection:'row'
    }
})
export default App

