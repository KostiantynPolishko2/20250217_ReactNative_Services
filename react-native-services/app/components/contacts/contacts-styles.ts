import { StyleSheet } from "react-native";
import { StylesApp } from "@/app/styles";


export const LoadStyles = StyleSheet.create({
    body: {
        ...StylesApp.flex_row,
        backgroundColor: '#6a7074',
    },
    loaded: {
        borderRadius: 0,
        width: 'auto',
    },
    unloaded: {
        borderRadius: 5,
    },
    btn: {
        fontSize: 35,   
        color: '#26d13f',
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
});

export const ListStyles = StyleSheet.create({
    body: {
        ...StylesApp.flex_row,
        flexDirection: 'column',
        backgroundColor: '#c1c7c2',
        padding: 5,
    }
});

export const ContactsRowStyles = StyleSheet.create({
    card: {
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    cardWrapper: {
        borderBottomWidth: 1,
        borderColor: '#9ca1ac',
        backgroundColor: '#afd4ba',
    },
    cardImg: {
        width: 42,
        height: 42,
        borderRadius: 12,
        marginLeft: 5,
    },
    cardAvatar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9ca1ac',
    },
    cardAvatarText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#fff',
    },
    cardBody: {
        marginRight: 'auto',
        marginLeft: 12,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
    },
    cardPhone: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '500',
        color: '#616d79',
        marginTop: 3,
    },
    cardAction: {
        paddingRight: 16,
    },
});