import React, { FC } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { StylesApp } from "../styles";

const Home:FC = () => {

  const router = useRouter();

  return (
    <View style={styles.body}>
      <Text style={styles.textRow}>home</Text>
      <Button title="Go Client" onPress={() => router.push('/components/client/client')} />
      <Button title="Go Seller" onPress={() => router.push('/components/seller/seller')} />
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        backgroundColor: '#aed5db',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Home;