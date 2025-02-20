import { StyleSheet } from "react-native";
import { StylesApp } from "@/app/styles";

const ServiceStyles = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        flex: 0,
        borderRadius: 5,
        borderColor: 'whitesmoke',
        borderWidth: 1,
        backgroundColor: '#a0bbe7',
    },
    bodyBtn: {
        ...StylesApp.flex_row,
        padding: 10,
    },
    btn: {
        margin: 5,
        padding: 5,
        backgroundColor: '#574d46',
        fontSize: 40,
        borderRadius: 5,
        elevation: 10,
    },
    titeTxt: {
        backgroundColor: '#726c66',
        color: 'whitesmoke',
        padding: 5,
        fontWeight: 'bold',
        width: 200,
        textAlign: 'center',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    image: {
        width: 200,
        height: 200,
    }
})

export default ServiceStyles;