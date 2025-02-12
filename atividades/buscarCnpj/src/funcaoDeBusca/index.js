import axios from "axios"

export default async function buscarDadosPorCnpj(cnpj){
    try {
        const response = await axios.get(`https://api.invertexto.com/v1/cnpj/${cnpj}:cnpj`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os dados cadastrados: ', error);
        throw error;
    }
}