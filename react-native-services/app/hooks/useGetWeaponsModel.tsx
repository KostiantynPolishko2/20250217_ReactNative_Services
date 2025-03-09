import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import useAxiosAdmin from "./useAxiosAdmin";
import { WeaponsCardDto } from "../types/AdminServerTypes";

const useGetWeaponsModel = (_baseURL: string) => {
    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const [weaponsModel, setWeaponsModel] = useState<WeaponsCardDto | undefined>(undefined);

    // get weapons by model
    const get = (model: string) => {
        treatData({
            route: `model/${model}`,
            method: 'GET',
            data: {},
            jwt: null
        });
        // console.log('get weapons', response || error);
    }

    useEffect(()=>{
        setWeaponsModel(response);
    }, [response])

    return {weaponsModel, loading, get};
}

export default useGetWeaponsModel;