import axios from 'axios';

const API_TOKEN = '17866|th3hz72YL2br1xqDbiRKCp2i98qVlWIH'; // Substitua pelo seu token
const BASE_URL = 'https://api.invertexto.com/v1/holidays';

export const buscarFeriados = async (ano, estado = 'SP') => {
  try {
    const response = await axios.get(`${BASE_URL}/${ano}?token=${API_TOKEN}&state=${estado}`);
    return response.data; // Retorna a lista de feriados
  } catch (error) {
    console.error('Erro ao buscar os feriados:', error);
    throw error;
  }
};
