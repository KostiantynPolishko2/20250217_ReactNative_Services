import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ApiWeaponsService } from "../services/WeaponsService";
import WeaponsItems from "./WeaponsItems";
import WeaponsModel from "./WeaponsModel";

const weaponsService = new ApiWeaponsService(process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '')

const ClientPage: FC = () => {
    return(
        <View>
            <Text>weapons items</Text>
            <WeaponsItems weaponsService={weaponsService}/>
            <WeaponsModel weaponsService={weaponsService} model="ПМ"/>
        </View>
    );
};

export default ClientPage;