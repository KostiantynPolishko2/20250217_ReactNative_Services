import { Text, View, StyleSheet } from "react-native";
import WeaponsData from "./components/WeaponsData";
import WeaponsModel from "./components/WeaponsModel";
import WeaponsModelsAuth from "./components/WeaponsModelsAuth";
import Login from "./components/Login";


export default function Index() {
  return (
    <View style={styles.body}>
      <Text>weapons axios request GET</Text>
      <Login/>
      {/* <WeaponsData/> */}
      {/* <WeaponsModel model="пб"/> */}
      <WeaponsModelsAuth/>
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