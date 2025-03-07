import { Text, View, StyleSheet } from "react-native";
import WeaponsData from "./components/WeaponsData";
import WeaponsModel from "./components/WeaponsModel";
import WeaponsModelsAuth from "./components/WeaponsModelsAuth";
import WeaponsPostNew from "./components/WeaponsPostNew";
import {Delete} from "./components/WeaponsCRUD";
import Login from "./components/Login";


export default function Index() {
  return (
    <View style={styles.body}>
      <Text>weapons axios request GET</Text>
      <Login/>
      {/* <WeaponsData/> */}
      {/* <WeaponsModel model="пм"/> */}
      {/* <WeaponsModelsAuth/> */}
      {/* <WeaponsPostNew/> */}
      <Text>weapons CRUD</Text>
      <Delete model="item_model1"/>
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