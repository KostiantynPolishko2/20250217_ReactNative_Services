import { View, StyleSheet } from "react-native";
import { StylesApp } from "./styles";
import BatteryBar from "./components/battery/battery-bar";
import BatteryStats from "./components/battery/battery-stats";

export default function Index() {
  return (
    <View style={styles.body}>
      <BatteryStats level={0.56} lowPowerMode={false} state={1}/>
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