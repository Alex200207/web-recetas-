import axios from "axios";
import { RecetasType } from "../types";

const httpClientplugin = {
    get: async(url: string): Promise<RecetasType[]> => {
        try{
            const response = await axios.get(url);
            return response.data;
        }
        catch(error){
            console.error('error en la solicitud GET:',error)
            throw new Error('No se pudieron obtener los datos');
        }
    }
}

export{
    httpClientplugin as http
}