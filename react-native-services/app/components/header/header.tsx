import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StylesApp } from "../styles";

const Header: FC = () => {
    return(
        <View style={styles.body}>
            <Text>header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        ...StylesApp.flex_row,
        backgroundColor: '#c9c991',
        height: 50,
    }
});

export default Header;