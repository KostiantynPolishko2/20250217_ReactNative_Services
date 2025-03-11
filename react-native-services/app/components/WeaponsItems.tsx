import React, { FC, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { IWeaponsServices } from "../services/IWeaponsService";
import useGetWeaponsCardsDto from "../hooks/useGetWeaponsCardsDto";
import { WeaponsItemProps } from "../services/IWeaponsService";
import { PositionStyle } from "../styles/styles";

interface WeaponsServiceProps {
    weaponsService: IWeaponsServices;
}

const WeaponsItems: FC<WeaponsServiceProps> = ({weaponsService}) => {

    const {error, loading, weaponsCardsDto, get} = useGetWeaponsCardsDto(process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '');
    const [weaponsItems, setWeaponsItems] = useState<WeaponsItemProps[]>([])

    useEffect(()=>{
        (async ()=>{ await get()})();
    }, [weaponsService]);

    useEffect(()=>{
        if(weaponsCardsDto?.length)
            setWeaponsItems(weaponsService.getWeaponsItems(weaponsCardsDto));
    }, [weaponsCardsDto]);

    if (loading) return <Text>...loaded weapons items</Text>;

    if (error) throw new Error(error);

    return (
        <View style={PositionStyle.column}>
            {weaponsItems.map((item, index) => (
                <View key={index+1} style={{backgroundColor: '#dad598', margin: 5, width: '100%'}}>
                    <Text>item{index+1}: {item.model} - {item.price} UAH</Text>
                </View>
            ))}
        </View>
    );
};

export default WeaponsItems;