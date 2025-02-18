import axios from "axios";

const geradorImagem = async (descricao) =>{
    const options = {
        method: 'POST',
        url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/3D',
        headers: {
          'x-rapidapi-key': 'b878392687mshe6fd8f48fd2977bp117ff5jsn384e3977e01a',
          'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          inputs: descricao
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data.imageUrl;
          //console.log(response.data);
      } catch (error) {
          console.error(error);
          throw error;
      }
}

export default geradorImagem