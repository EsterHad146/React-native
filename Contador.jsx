import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class App extends Component{
    constructor(props){
        super(props); //serve como parametro para a class Component
        this.state = {
            contador: 0,
        };
    }

    aumentarClique = () =>{
        this.setState({ contador: this.state.contador + 1});
    };
    diminuirClique = () =>{
        this.setState({ contador: this.state.contador - 1});
    };

    render(){
        return(
            <View style ={{padding: 50}}>
                <View> {/*  style={styles.container} */}
                    <Text>Você clicou {this.state.contador} vezes</Text>
                </View>
                <TouchableOpacity onPress={this.aumentarClique}>
                    <Text>Somar (+)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.diminuirClique}>
                    <Text>Subtrair (-)</Text>
                </TouchableOpacity>

            </View>
        )
    }

}
export default App
