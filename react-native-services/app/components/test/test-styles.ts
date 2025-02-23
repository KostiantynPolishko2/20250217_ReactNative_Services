import { StyleSheet, StatusBar } from "react-native";

export const TestSectionStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
    },
    title: {
        fontSize: 24,
    },
});
  