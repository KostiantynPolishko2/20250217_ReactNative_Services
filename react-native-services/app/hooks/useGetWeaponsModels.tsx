import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import useAxiosAdmin from "./useAxiosAdmin";
import { WeaponsCardDto } from "../types/AdminServerTypes";

const useGetWeaponsModels = (_baseURL: string) => {
    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const [weaponsModels, setWeaponsModels] = useState<WeaponsCardDto[] | undefined>(undefined);

    // get all weapons models
    const get = () => {
        treatData({
            route: 'client-models',
            method: 'GET',
            data: {},
            jwt: null
        });
        // console.log('get weapons', response? response[0] : error);
    }

    useEffect(()=>{
        setWeaponsModels(response);
    }, [response]);

    return {weaponsModels, loading, get};
}

export default useGetWeaponsModels;