import { StyleSheet } from "react-native";
import { StylesApp } from "@/app/styles";


export const LoadStyles = StyleSheet.create({
    body: {
        ...StylesApp.flex_row,
        backgroundColor: '#6a7074',
    },
    loaded: {
        width: '100%',
        borderRadius: 0,
    },
    unloaded: {
        width: 'auto',
        borderRadius: 5,
    },
    btn: {
        fontSize: 35,   
        color: '#289e56',
        backgroundColor: '#3b3737',
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 5,
    },
    bthTxt: {
        color: 'whitesmoke',
        paddingLeft: 5,
        paddingRight: 5,
        fontWeight: '600',
        fontSize: 20,
    }
})