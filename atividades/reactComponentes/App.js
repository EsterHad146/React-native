import React, { useState } from "react";
import { 
  Titulo,
  CaixaTexto, 
  Botao, 
  Container, 
  CaixaSelecao, 
  ControleDeslizante, 
  AlternarEstudante 
} from "./src/componentes";

export default function App() {
  // Estados para os componentes
  const [moeda, setMoeda] = useState("USD");
  const moedasDisponiveis = ["USD", "EUR", "BRL", "GBP"];

  const [limite, setLimite] = useState(250); // Estado para o Slider
  const [estudante, setEstudante] = useState(false); // Estado para o Switch

  // Função chamada ao clicar no botão
  const funcaoClique = () => {
    alert("O botão foi clicado");
  };

  return (
    <Container>
      <Titulo text="Boas Vindas" />
      <CaixaTexto/>
      <Botao text="Clique Aqui" onPress={funcaoClique} />

      {/* Caixa de seleção de moedas */}
      <CaixaSelecao
        moedas={moedasDisponiveis}
        moedaSelecionada={moeda}
        onChangeMoeda={setMoeda} 
      />

      {/* Controle Deslizante (Slider) */}
      <ControleDeslizante valorInicial={limite} />

      {/* Alternância (Switch) */}
      <AlternarEstudante valorInicial={estudante} />
    </Container>
  );
}
