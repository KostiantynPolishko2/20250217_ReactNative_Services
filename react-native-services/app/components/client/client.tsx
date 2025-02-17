import React, { FC } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

const Client: FC = () => {
    const router = useRouter();

    return(
        <View style={styles.body}>
            <Text>client page</Text>
            <Button title="Go Home" onPress={() => router.push('/components/home/home')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d8d0a2',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Client;