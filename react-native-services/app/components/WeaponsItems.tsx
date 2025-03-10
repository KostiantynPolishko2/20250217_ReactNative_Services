import React, { FC, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IWeaponsServices } from "../services/IWeaponsService";
import { WeaponsItem } from "../services/IWeaponsService";
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
                <View style={{backgroundColor: '#dad598', margin: 5, width: '100%'}}>
                    <Text key={index+1}>item{index+1}: {item.model} - {item.price} UAH</Text>
                </View>
            ))}
        </View>
    );
};

export default WeaponsItems;