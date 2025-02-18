import { Text, View } from "react-native";
import MyCamera  from "./camera/camera";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#c9d6cd',
      }}
    >
      <Text>start page</Text>
      <MyCamera/>
    </View>
  );
}