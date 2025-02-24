import { Text, View, StyleSheet } from "react-native";
import { StylesApp } from "./styles";
import BatteryBar from "./components/battery/battery-bar";

export default function Index() {
  return (
    <View style={styles.body}>
      <BatteryBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    ...StylesApp.flex1_center,
    backgroundColor: '#c9d6cd',
  }
});