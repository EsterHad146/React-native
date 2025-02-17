import React, {Component} from "react";
import {Text, View} from "react-native";
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
export default Titulo