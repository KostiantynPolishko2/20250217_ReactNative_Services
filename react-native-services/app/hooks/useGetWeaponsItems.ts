import { useState, useEffect } from "react";
import useAxiosAdmin from "./useAxiosAdmin";
import useTokenStorage from "./useTokenStorage";
import { WeaponsItemDto } from "../types/AdminServerTypes";

const useGetWeaponsItems = (_baseURL: string) => {
    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const {saveValue, getValue, removeValue} = useTokenStorage('jwt');
    const [weaponsItems, setWeaponsItems] = useState<WeaponsItemDto[] | undefined>(undefined);

    // get weapons items
    const get = async () => {
        treatData({
            route: `models`,
            method: 'GET',
            data:  {},
            jwt: await getValue()
        });
        // console.log('post model', response || error);
    }

    useEffect(()=>{
        setWeaponsItems(response);
    }, [response]);

    return {weaponsItems, loading, get}
}

export default useGetWeaponsItems;