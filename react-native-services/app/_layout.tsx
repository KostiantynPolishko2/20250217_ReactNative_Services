import { Stack } from "expo-router";
import { View } from "react-native";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Navigation from "./components/navigation/navigation";

export default function RootLayout() {
  return (
    <View style={{flex: 1}}>
      <Header/>
      <Navigation/>
      <Stack screenOptions={{ headerShown: false }}/>
      <Footer/>
    </View>
  );
}
