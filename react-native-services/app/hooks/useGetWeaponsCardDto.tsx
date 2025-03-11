import { useState, useEffect } from "react";
import useAxiosAdmin from "./useAxiosAdmin";
import { WeaponsCardDtoProps } from "../types/AdminServerTypes";
import { weaponsCardDtoDefault } from "../constants/Weapons";

const useGetWeaponsCardDto = (_baseURL: string) => {
    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const [weaponsCardDto, setWeaponsCardDto] = useState<WeaponsCardDtoProps>(weaponsCardDtoDefault);

    // get weapons by model
    const get = async (model: string):Promise<void> => {
        await treatData({
            route: `model/${model}`,
            method: 'GET',
            data: {},
            jwt: null
        });
        // console.log('get weapons', response || error);
    }

    useEffect(()=>{
        setWeaponsCardDto(response);
    }, [response])

    return {error, loading, weaponsCardDto, get};
}

export default useGetWeaponsCardDto;