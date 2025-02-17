import React, { FC } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
import { StylesApp } from "../styles";

const Header: FC = () => {

    const router = useRouter();

    return(
        <View style={styles.body}>
            <View style={styles.btn}>
                <Button title="Home" onPress={() => router.push('/components/home/home')} color={'#2ea742'}/>
            </View>
            <Text>header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        ...StylesApp.flex_row,
        backgroundColor: '#c9c991',
        height: 50,
    },
    btn: {
        position: 'absolute',
        left: 10,
    }
});

export default Header;