import { Text, View } from "react-native";
import Card from "./components/card";

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
      <Card/>
    </View>
  );
}
