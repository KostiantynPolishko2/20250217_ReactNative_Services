import { StyleSheet, StatusBar } from "react-native";
import { StylesApp } from "@/app/styles";

export const SectionListStyles = StyleSheet.create({
    container: {
        flex: 0,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 0,
        height: '90%',
        minWidth: '75%',
    },
    header: {
        fontSize: 26,
        backgroundColor: '#969393',
        color: 'wheat',
        paddingLeft: 5,
        textShadowOffset: {width:2, height: 2},
        textShadowRadius: 4,
        textShadowColor: 'black',
        borderBottomWidth: 1,
        borderColor: '#757474',
    },
    item: {
        ...StylesApp.flex_row,
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
    },
    title: {
        fontSize: 24,
    },
});
  