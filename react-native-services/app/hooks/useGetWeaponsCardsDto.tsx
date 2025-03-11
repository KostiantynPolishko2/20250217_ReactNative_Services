import { useState, useEffect } from "react";
import useAxiosAdmin from "./useAxiosAdmin";
import { WeaponsCardDtoProps } from "../types/AdminServerTypes";

const useGetWeaponsCardsDto = (_baseURL: string) => {
    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const [weaponsCardsDto, setWeaponsCardsDto] = useState<WeaponsCardDtoProps[] | undefined>(undefined);

    // get all weapons models
    const get = async ():Promise<void> => {
        await treatData({
            route: 'client-models',
            method: 'GET',
            data: {},
            jwt: null
        });
        // console.log('get weapons', response? response[0] : error);
    }

    useEffect(()=>{
        setWeaponsCardsDto(response);
    }, [response]);

    return {error, loading, weaponsCardsDto, get};
}

export default useGetWeaponsCardsDto;