import { View, StyleSheet } from "react-native";
import ImageService from "./components/media/image-service";
import { StylesApp } from "@/app/styles";

export default function Index() {
  return (
    <View style={styles.body}>
      <ImageService/>
      {/* <MobCamera/> */}
      {/* <MobImagePicker/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    ...StylesApp.flex1_center,
    backgroundColor: '#c9d6cd',
  }
});