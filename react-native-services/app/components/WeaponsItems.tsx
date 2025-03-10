import React, { FC, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IWeaponsServices } from "../services/IWeaponsService";
import { WeaponsItem } from "../services/IWeaponsService";
import { PositionStyle } from "../styles/styles";

interface WeaponsItemsProps {
    weaponsService: IWeaponsServices;
}

const WeaponsItems: FC<WeaponsItemsProps> = ({weaponsService}) => {

    const [weaponsItems, setWeaponsItems] = useState<WeaponsItem[] | undefined>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=>{
        weaponsService.getWeaponsItems().
        then((data)=>{
            setWeaponsItems(data);
            setLoading(true);
        }).
        catch(error => console.log('weaponns items error->: ', error)).
        finally(()=>{setLoading(false);})

    }, [weaponsService]);

    if (loading) return <Text>...loaded weapons items</Text>;

    // console.log('weapons items', weaponsItems && weaponsItems[0]);

    return (
        <View style={PositionStyle.column}>
            <Text>item1</Text>
            <Text>item2</Text>
            <Text>item3</Text>
        </View>
    );
};

export default WeaponsItems;