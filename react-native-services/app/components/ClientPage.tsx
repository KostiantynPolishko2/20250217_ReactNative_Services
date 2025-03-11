import React, { FC } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ApiWeaponsService } from "../services/WeaponsService";
import WithErrorBoundary from "../hocs/WithErrorBoundary";
import WeaponsItems from "./WeaponsItems";
import WeaponsModel from "./WeaponsModel";

const weaponsService = new ApiWeaponsService(process.env.EXPO_PUBLIC_ASPNET_ADMINSERVER_URL || '')

const ClientPage: FC = () => {
    return(
        <View>
            <Text>weapons items</Text>
            <WeaponsItems weaponsService={weaponsService}/>
            <WithErrorBoundary>
                <WeaponsModel weaponsService={weaponsService} model="пм"/>
            </WithErrorBoundary>
        </View>
    );
};

export default ClientPage;