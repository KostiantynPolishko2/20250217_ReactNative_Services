import { Text, View } from "react-native";
// import MyCamera  from "./camera/mycamera";
import MyCamera from "./camera/mycamera_gpt";

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
      <Text>CAMERA</Text>
      <MyCamera/>
    </View>
  );
}