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

type TWeaponsModel = {
    model?: string,
}

const WeaponsModel: FC<TWeaponsModel> = ({model}) => {

    if(!model)
        return <></>

    const _baseURL = 'http://adminpageserverpl2-dev.eba-pahpkfjc.eu-west-3.elasticbeanstalk.com/api/WeaponsItems';
    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const [weaponsModel, setWeaponsModel] = useState<WeaponsCardDto | undefined>(undefined);

    // fetch weapons by model
    const getWeaponsModel = () => {
        treatData({
            url: `model/${model}`,
            method: 'GET',
            data: {}
        });
        // console.log('get weapons', response || error);
    }

    useEffect(()=>{
        setWeaponsModel(response);
    }, [response])

    return (
        <View>
            <Text>weapons model</Text>
            <Button title="GetModel" onPress={getWeaponsModel}/>
            {weaponsModel && <Text>{weaponsModel?.name}</Text>}
            {loading && <Text>...loading</Text>}
        </View>
    );
}

export default WeaponsModel;