import { StyleSheet } from "react-native";
import { RowPositionStyle } from "./styles";

export const IconButtonStyle = StyleSheet.create({
    body: {
        ...RowPositionStyle.body,
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