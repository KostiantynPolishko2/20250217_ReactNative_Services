import React, { FC } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

const Seller: FC = () => {
    const router = useRouter();

    return(
        <View style={styles.body}>
            <Text>seller page</Text>
            <Button title="Go Home" onPress={() => router.push('../')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faffb8',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Seller;