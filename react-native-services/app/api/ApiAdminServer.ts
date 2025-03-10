import axios from "axios";
import { WeaponsCardDto } from "../types/AdminServerTypes";

export const getWeaponsCardDto = async(_baseURL: string):Promise<WeaponsCardDto[]> => {

    const axiosInstance = axios.create({
        baseURL: _baseURL,
        method: 'GET',
        responseType: 'json',
        timeout: 5000,
    });

    try{
        const response = await axiosInstance.get('client-models');
        return response.data as WeaponsCardDto[];
    }
    catch(error){
        console.log('get WeaponsCardDto error:', error);
        return [];
    }

    // return [];
};