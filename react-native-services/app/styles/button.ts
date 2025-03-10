import { StyleSheet } from "react-native";
import { PositionStyle } from "./styles";

export const IconButtonStyle = StyleSheet.create({
    body: {
        ...PositionStyle.row,
        backgroundColor: 'grey',
        borderRadius: 5,
    },
    text: {
        paddingLeft: 5,
        paddingRight: 5,
        color: 'whitesmoke',
        fontWeight: 700,
    }
});