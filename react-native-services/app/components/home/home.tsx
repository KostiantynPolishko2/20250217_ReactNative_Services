import React, { FC } from "react";
import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

const Home:FC = () => {

  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>home</Text>
      <Button title="Go Client" onPress={() => router.push('/components/client/client')} />
      <Button title="Go Seller" onPress={() => router.push('/components/seller/seller')} />
    </View>
  );
}

export default Home;