import React, { FC, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import useAxiosAdmin from "../hooks/useAxiosAdmin";
import useTokenStorage from "../hooks/useTokenStorage";

type WeaponsItemsDto = {
    model: string,
    name: string,
    type: string,
}

const WeaponsModelsAuth: FC = () => {

    const _baseURL = 'http://adminpageserverpl2-dev.eba-pahpkfjc.eu-west-3.elasticbeanstalk.com/api/WeaponsItems';

    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const {saveValue, getValue, removeValue} = useTokenStorage('jwt');
    const [weaponsModels, setWeaponsModels] = useState<WeaponsItemsDto[] | undefined>(undefined);

    // fetch weapons models
    const getWeaponsModels = async () => {
        treatData({
            url: `models`,
            method: 'GET',
            data:  {},
            jwt: await getValue()
        });
        // console.log('get weapons', response || error);
    }

    useEffect(()=>{
        setWeaponsModels(response);
    }, [response])

    return (
        <View>
            <Text>auth: weapons model</Text>
            <Button title="GetModels" onPress={getWeaponsModels}/>
            {weaponsModels && <Text>{weaponsModels[0].model} | {weaponsModels[0].name} | {weaponsModels[0].type} </Text>}
            {loading && <Text>...loading</Text>}
        </View>
    );
}

export default WeaponsModelsAuth;