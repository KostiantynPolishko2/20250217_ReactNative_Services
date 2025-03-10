import { Text, View, StyleSheet } from "react-native";
import { Delete, Post, GetItems, GetModelByName, GetModels } from "./components/WeaponsCRUD";
import Login from "./components/Login";
import { arrNewWeaponsModels } from "./mock/AdminServerTestData";
import WeaponsList from "./components/ClientPage";

export default function Index() {
  return (
    <View style={styles.body}>
      {/* <Login/> */}
      {/* <Text>weapons CRUD</Text> */}
      {/* <GetModels/> */}
      {/* <GetModelByName model="АКМ"/> */}
      {/* <GetItems/> */}
      {/* <Post weaponsModel={arrNewWeaponsModels[1]}/> */}
      {/* <Delete model="item_model1"/> */}
      <WeaponsList/>
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