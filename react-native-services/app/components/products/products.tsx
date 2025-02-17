import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StylesApp } from "../styles";

const Products: FC = () => {
    return(
        <View style={styles.body}>
            <Text style={styles.textRow}>products page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        backgroundColor: '#c1f8ad',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Products;