class App extends Component {
  render(){
    let nome = "Jarvis";
    let img = "https://fmnews.com.br/wp-content/uploads/2018/09/Inteligencia-Artificial.jpg";
    return(
      <View>
        <Text>Olá Mundo!!</Text>
        <Text>Meu primeiro App!!</Text>
        <Text style={{ color: "#FF0000" , fontSize: 25, margin: 15}}>Técnico em Informática para Internet</Text>
        <Image source={{uri:img}} style={{width:300, height: 300}} />
        <Text style={{ fontSize:30 }}> {nome} </Text>
      </View>
    );
   }
}
export default App;
