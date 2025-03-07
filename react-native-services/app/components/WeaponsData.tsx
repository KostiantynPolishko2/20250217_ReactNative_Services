import React, { FC, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import useAxiosAdmin from "../hooks/useAxiosAdmin";

type WeaponsCardDto = {
    model: string,
    name: string,
    isVisible: boolean,
    price: number,
    weight: number,
    description: string,
    image_path: string,
}

const WeaponsData: FC = () => {
    const _baseURL = 'http://adminpageserverpl2-dev.eba-pahpkfjc.eu-west-3.elasticbeanstalk.com/api/WeaponsItems';

    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const [weaponsData, setWeaponsData] = useState<WeaponsCardDto[] | undefined>(undefined);

    // fetch all weapons models
    const getWeaponsData = () => {
        treatData({
            url: 'client-models',
            method: 'GET',
            data: {}
        });
        console.log('get weapons', response? response[0] : error);
    }

    useEffect(()=>{
        setWeaponsData(response);
    }, [response]);

    return (
        <View>
            <Text>weapons data</Text>
            <Button title="GetData" onPress={getWeaponsData}/>
            {weaponsData && <Text>1. {weaponsData[0].model} - {weaponsData[0].price}</Text>}
            {loading && <Text>...loading</Text>}
        </View>
    );
}

export default WeaponsData;