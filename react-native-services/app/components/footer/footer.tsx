import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StylesApp } from "../styles";

const Footer: FC = () => {
    return(
        <View style={styles.body}>
            <Text style={styles.text}>footer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        ...StylesApp.flex_row,
        backgroundColor: '#85857a',
        height: 50,
    },
    text: {
        color: 'white',
    }
});

export default Footer;