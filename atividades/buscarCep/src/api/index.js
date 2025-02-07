import axios from "axios"

export const buscarEnderecoPorCep = async (cep) =>{
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar o endereço: ', error);
        throw error; // retorna o erro do console
    }
};