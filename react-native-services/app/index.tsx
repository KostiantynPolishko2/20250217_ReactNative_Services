import { View, StyleSheet } from "react-native";
import { StylesApp } from "./styles";
import Battery from "./components/battery/battery";
export default function Index() {
  return (
    <View style={styles.body}>
      <Battery/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    ...StylesApp.flex1_center,
    backgroundColor: '#c9d6cd',
  }
});