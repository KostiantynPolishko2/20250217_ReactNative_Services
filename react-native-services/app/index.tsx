import { Text, View, StyleSheet } from "react-native";
import WeaponsData from "./components/WeaponsData";
import WeaponsModel from "./components/WeaponsModel";


export default function Index() {
  return (
    <View style={styles.body}>
      <Text>weapons axios request GET</Text>
      {/* <WeaponsData/> */}
      <WeaponsModel model="пб"/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#c9d6cd',
  }
})