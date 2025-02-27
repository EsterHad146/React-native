import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text>Página Home</Text>
            <Button
                title="Abrir Drawer" 
                onPress={() => navigation.openDrawer()}
            />
            {/* <Button
                title="Ir para página Contatos" 
                onPress={()=> navigation.navigate('Contatos')}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})