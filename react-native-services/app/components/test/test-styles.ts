import { StyleSheet, StatusBar } from "react-native";
import { StylesApp } from "@/app/styles";

export const TestSectionStyles = StyleSheet.create({
    container: {
        flex: 0,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
        height: '90%',
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
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
  