import React, { FC } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { StylesApp } from "../styles";

const Navigation: FC = () => {

    const router = useRouter();

    return(
        <View style={styles.body}>
            <Button title="Client" onPress={() => router.push('/components/client/client')} color={'#639ec5'}/>
            <Button title="Seller" onPress={() => router.push('/components/seller/seller')} color={'#639ec5'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        ...StylesApp.flex_row,
        padding: 5,
        backgroundColor: '#5d7a8d',
    }
})

export default Navigation;