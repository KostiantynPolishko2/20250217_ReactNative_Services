import React, { FC } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet} from "react-native";
import { StylesApp } from "../styles";

const Client: FC = () => {
    const router = useRouter();

    return(
        <View style={styles.body}>
            <Text style={styles.textRow}>client page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        backgroundColor: '#dbf3a2',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Client;