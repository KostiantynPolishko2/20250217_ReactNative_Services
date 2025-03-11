import axios from "axios";
import { WeaponsCardDto } from "../types/AdminServerTypes";
import { MILISECONDS_PER_SECOND } from "../constants/Time";

export const getWeaponsCardsDto = async(_baseURL: string):Promise<WeaponsCardDto[]> => {

    const axiosInstance = axios.create({
        baseURL: _baseURL,
        responseType: 'json',
        timeout: 5 * MILISECONDS_PER_SECOND,
    });

    try{
        const response = await axiosInstance.get('client-models');
        return response.data as WeaponsCardDto[];
    }
    catch(error){
        console.log('get WeaponsCardsDto error:', error);
        return [];
    }
};

export const getWeaponsCardDtoByModel = async(_baseURL: string, model: string):Promise<WeaponsCardDto | undefined> => {

    const axiosInstance = axios.create({
        baseURL: _baseURL,
        responseType: 'json',
        timeout: 5 * MILISECONDS_PER_SECOND,
    });

    try{
        const response = await axiosInstance.get(`model/${model}`);
        return response.data as WeaponsCardDto;
    }
    catch(error){
        console.log('get WeaponsCardDtoByModel error:', error);
        // return undefined
        if (error instanceof Error)
            throw new Error(`${(error as Error).name}: ${(error as Error).message}`);
        else
            throw new Error('unknown error occured');
    }
};