import React, { FC } from "react";
import { View, Text } from "react-native";
import { WeaponsService } from "../services/WeaponsService";
import WithErrorBoundary from "../hocs/WithErrorBoundary";
import WeaponsItems from "./WeaponsItems";
import WeaponsModel from "./WeaponsModel";

const weaponsService = new WeaponsService()

const ClientPage: FC = () => {
    return(
        <View>
            <Text>weapons items</Text>
            <WeaponsItems weaponsService={weaponsService}/>
            <WithErrorBoundary>
                <WeaponsModel weaponsService={weaponsService} model="пб"/>
            </WithErrorBoundary>
        </View>
    );
};

export default ClientPage;