// api.js
import axios from 'axios';

const calculateIMC = async (height, weight) => {
  const options = {
    method: 'GET',
    url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
    params: {
      height,
      weight
    },
    headers: {
      'x-rapidapi-key': 'b878392687mshe6fd8f48fd2977bp117ff5jsn384e3977e01a',
      'x-rapidapi-host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data; 
  } catch (error) {
    throw new Error('Erro ao calcular o IMC. Por favor, tente novamente.');
  }
};

export default calculateIMC;