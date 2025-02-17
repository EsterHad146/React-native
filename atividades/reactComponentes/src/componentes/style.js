import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight: 'bold',
        textAlign:'center',
        justifyContent:'center',
        marginVertical: 40,
        color:'#222'
    },
    button:{
        backgroundColor:'#4A90E2',
        paddingVertical:12,
        paddingHorizontal:20,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'#222',
        shadowOffset:{width:0,height:2},
        shadowOpacity: 0.2,
        shadowRadius:4,
        elevation:5,
        margin:20
    }

})

export default styles
