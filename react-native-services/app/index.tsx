import { Text, View, StyleSheet } from "react-native";
import WeaponsData from "./components/WeaponsData";
import WeaponsModel from "./components/WeaponsModel";
import WeaponsModelsAuth from "./components/WeaponsModelsAuth";
import {Delete, Post} from "./components/WeaponsCRUD";
import Login from "./components/Login";
import { arrNewWeaponsModels } from "./mock/AdminServerTestData";

export default function Index() {
  return (
    <View style={styles.body}>
      <Text>weapons axios request GET</Text>
      <Login/>
      {/* <WeaponsData/> */}
      {/* <WeaponsModel model="пм"/> */}
      {/* <WeaponsModelsAuth/> */}
      <Text>weapons CRUD</Text>
      <Post weaponsModel={arrNewWeaponsModels[0]}/>
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