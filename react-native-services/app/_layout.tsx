import { Stack } from "expo-router";
import { View } from "react-native";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function RootLayout() {
  return (
    <View style={{flex: 1}}>
      <Header/>
      <Stack screenOptions={{ headerShown: false }}/>
      <Footer/>
    </View>
  );
}
