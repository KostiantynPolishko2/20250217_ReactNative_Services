import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ApiWeaponsService } from "../services/WeaponsService";
import WeaponsItems from "./WeaponsItems";

const weaponsItems = new ApiWeaponsService(process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '')

const WeaponsList: FC = () => {
    return(
        <View>
            <Text>weapons items</Text>
            <WeaponsItems weaponsService={weaponsItems}/>
        </View>
    );
};

export default WeaponsList;