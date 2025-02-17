import React, { FC } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { StylesApp } from "../styles";

const Seller: FC = () => {
    const router = useRouter();

    return(
        <View style={styles.body}>
            <Text style={styles.textRow}>seller page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        backgroundColor: '#faffb8',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Seller;