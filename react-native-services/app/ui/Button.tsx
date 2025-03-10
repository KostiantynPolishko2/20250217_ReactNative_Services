import React, { FC } from "react";
import { Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { IconButtonStyle } from "../styles/button";

type ButttonProps = {
    title?: string,
    iconName?: string,
}

export const IconButton:FC<ButttonProps> = ({title='BUTTON', iconName='gesture-tap-button'}) => {
    return (
        <View  style={IconButtonStyle.body}>
            <Text style={IconButtonStyle.text}>{title}</Text>
            <MaterialCommunityIcons name={iconName || ''} size={34} color='wheat'/>
        </View>
    );
};