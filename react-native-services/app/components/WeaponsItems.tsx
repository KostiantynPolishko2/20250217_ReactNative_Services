import React, { FC } from "react";
import { View, Text } from "react-native";
import { IWeaponsServices } from "../services/IWeaponsService";
import useWeaponsItems from "../hooks/useWeaponsItems";
import { PositionStyle } from "../styles/styles";

interface WeaponsItemsProps {
    weaponsService: IWeaponsServices;
}

const WeaponsItems: FC<WeaponsItemsProps> = ({weaponsService}) => {

    const {loading, weaponsItems} = useWeaponsItems(weaponsService);

    if (loading) return <Text>...loaded weapons items</Text>;

    // console.log('weapons items', weaponsItems.length);

    return (
        <View style={PositionStyle.column}>
            {weaponsItems.length && weaponsItems.map((item, index) => (
                <View key={index+1} style={{backgroundColor: '#dad598', margin: 5, width: '100%'}}>
                    <Text>item{index+1}: {item.model} - {item.price} UAH</Text>
                </View>
            ))}
        </View>
    );
};

export default WeaponsItems;