import { Text, View, StyleSheet } from "react-native";
// import WeaponsData from "./components/WeaponsData";
import { Delete, Post, GetItems, GetModelByName, GetModels } from "./components/WeaponsCRUD";
import Login from "./components/Login";
import { arrNewWeaponsModels } from "./mock/AdminServerTestData";

export default function Index() {
  return (
    <View style={styles.body}>
      <Text>weapons axios request GET</Text>
      <Login/>
      <Text>weapons CRUD</Text>
      <GetModels/>
      <GetModelByName model="пм"/>
      <GetItems/>
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