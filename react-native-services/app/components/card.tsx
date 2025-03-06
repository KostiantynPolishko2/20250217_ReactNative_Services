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

    const {response, error, loading, treatData} = useAxiosAdmin();
    const [weapons, setWeapons] = useState<WeaponsCardDto | undefined>(undefined);
    const [weaponsData, setWeaponsData] = useState<WeaponsCardDto[] | undefined>(undefined);

    // fetch all weapons models
    const getWeaponsAll = () => {
        treatData({
            url: 'client-models',
            method: 'GET',
        });
        // console.log('get weapons', response || error);
        setWeaponsData(response);
    }

    // fetch weapons by model
    const getWeaponsModel = () => {
        treatData({
            url: 'model/ПМ',
            method: 'GET',
        });
        console.log('get weapons', response || error);
    }

    useEffect(()=>{
        setWeapons(response);
    }, [response])

    return (
        <View>
            <Text>cards</Text>
            <Button title="get" onPress={getWeaponsModel}/>
            {loading && <Text>...loading</Text>}
            {weapons && <Text>{weapons?.name}</Text>}
        </View>
    );
}

export default Card;