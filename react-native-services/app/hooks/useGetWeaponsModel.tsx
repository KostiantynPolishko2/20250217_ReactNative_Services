import { useState, useEffect } from "react";
import useAxiosAdmin from "./useAxiosAdmin";
import { WeaponsCardDto } from "../types/AdminServerTypes";

const useGetWeaponsModel = (_baseURL: string) => {
    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const [weaponsCardDto, setWeaponsCardDto] = useState<WeaponsCardDto | undefined>(undefined);

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

    return {weaponsCardDto, loading, get};
}

export default useGetWeaponsModel;