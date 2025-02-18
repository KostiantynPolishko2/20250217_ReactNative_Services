import { View, StyleSheet } from "react-native";
import MobCamera from "./components/camera/mobcamera";
import { StylesApp } from "@/app/styles";

export default function Index() {
  return (
    <View style={styles.body}>
      <MobCamera/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    ...StylesApp.flex1_center,
    backgroundColor: '#c9d6cd',
  }
});