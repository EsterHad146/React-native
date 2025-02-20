import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation();

    function navegarSobre(){
        navigation.navigate('Sobre')
    }

    return(
        <View style={style.container}>
            <Text>Página Home</Text>
            <Button
                title='Ir para a página Sobre'
                onPress = {navegarSobre}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    }
})