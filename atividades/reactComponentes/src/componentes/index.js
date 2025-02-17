import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import styles from "./style";

class Titulo extends Component{
    render(){
        return(
            <View>
                <Text style={styles.title}>{this.props.text}</Text>
            </View>
        )
    }
}

class Botao extends Component{
    render(){
        const {text, clicado}= this.props
        return(
            <View>
               <TouchableOpacity style={styles.button} onPress={clicado}>activeOpacity={0.8}
                <Text>{text}</Text>
               </TouchableOpacity>
            </View>
        )
    }
}
export default {Titulo, Botao}


