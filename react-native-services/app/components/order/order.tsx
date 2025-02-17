import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StylesApp } from "../styles";

const Order: FC = () => {
    return(
        <View style={styles.body}>
            <Text style={styles.textRow}>order page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        backgroundColor: '#e7bf9e',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Order;