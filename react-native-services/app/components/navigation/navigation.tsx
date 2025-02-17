import React, { FC } from "react";
import { View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { StylesApp } from "../styles";

const Navigation: FC = () => {

    const router = useRouter();

    return(
        <View style={styles.body}>
            <Button title="products" onPress={() => router.push('/components/products/products')} color={'#639ec5'}/>
            <Button title="order" onPress={() => router.push('/components/order/order')} color={'#639ec5'}/>
            <Button title="client" onPress={() => router.push('/components/client/client')} color={'#639ec5'}/>
            <Button title="seller" onPress={() => router.push('/components/seller/seller')} color={'#639ec5'}/>
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