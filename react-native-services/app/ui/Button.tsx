import React, { FC } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { IconButtonStyle } from "../styles/button";

type ButttonProps = {
    title?: string,
    iconName?: string,
}

export const IconButton:FC<ButttonProps> = ({title, iconName}) => {
    return (
        <View  style={IconButtonStyle.body}>
            <Text style={IconButtonStyle.text}>{title || 'BUTTON'}</Text>
            <MaterialCommunityIcons name={iconName || 'gesture-tap-button'} size={34} color='wheat'/>
        </View>
    );
};
