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

const Card: FC = () => {

    // const _baseURL = process.env.ASPNET_ADMINSERVER_BASEURL;
    // console.log('base url', Constants.expoConfig?.extra.ASPNET_ADMINSERVER_BASEURL);

    const {response, error, loading, treatData} = useAxiosAdmin('_baseURL');
    const [weaponsModel, setWeaponsModel] = useState<WeaponsCardDto | undefined>(undefined);
    const [weaponsData, setWeaponsData] = useState<WeaponsCardDto[] | undefined>(undefined);

    // fetch all weapons models
    const getWeaponsAll = () => {
        treatData({
            url: 'client-models',
            method: 'GET',
        });
        console.log('get weapons', response? response[0] : error);
    }

    useEffect(()=>{
        setWeaponsData(response);
    }, [response]);


    // fetch weapons by model
    // const getWeaponsModel = () => {
    //     treatData({
    //         url: 'model/ПБ',
    //         method: 'GET',
    //     });
    //     // console.log('get weapons', response || error);
    // }

    // useEffect(()=>{
    //     setWeaponsModel(response);
    // }, [response])

    return (
        <View>
            <Text>cards</Text>
            <Button title="GetAll" onPress={getWeaponsAll}/>
            {weaponsData && <Text>1. {weaponsData[0].model} - {weaponsData[0].price}</Text>}
            {/* <Button title="GetModel" onPress={getWeaponsModel}/> */}
            {/* {weaponsModel && <Text>{weaponsModel?.name}</Text>} */}
            {loading && <Text>...loading</Text>}
        </View>
    );
}

export default Card;