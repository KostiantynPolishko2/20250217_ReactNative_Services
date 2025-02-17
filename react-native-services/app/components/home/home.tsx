import React, { FC } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { StylesApp } from "../styles";

const Home:FC = () => {

  const router = useRouter();

  return (
    <View style={styles.body}>
      <Text style={styles.textRow}>home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        ...StylesApp.flex1_center,
        backgroundColor: '#c2e4e9',
    },
    textRow: {
        textAlign:'center',
    }
});

export default Home;