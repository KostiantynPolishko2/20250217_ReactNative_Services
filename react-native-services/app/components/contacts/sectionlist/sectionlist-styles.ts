import { StyleSheet, StatusBar } from "react-native";
import { StylesApp } from "@/app/styles";

export const SectionListStyles = StyleSheet.create({
    container: {
        flex: 0,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 0,
        height: '75%',
        // minWidth: '75%',
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

export const SearchBarStyles = StyleSheet.create({
    search: {
        position: 'relative',
        backgroundColor: '#efefef',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    searchWrapper: {
        paddingTop: 8,
        paddingHorizontal: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderColor: '#efefef',
    },
    searchIcon: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: 34,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
    },
    searchControl: {
        paddingVertical: 10,
        paddingHorizontal: 14,
        paddingLeft: 34,
        width: '100%',
        fontSize: 16,
        fontWeight: '500',
    },
    searchContent: {
        paddingLeft: 24,
    },
    searchEmpty: {
        textAlign: 'center',
        paddingTop: 16,
        fontWeight: '500',
        fontSize: 15,
        color: '#9ca1ac',
    },
});
  