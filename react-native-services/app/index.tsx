import { View, StyleSheet } from "react-native";
import ImageService from "./components/services/image-service";
import MediaService from "./components/services/media-services";
import { StylesApp } from "@/app/styles";

export default function Index() {
  return (
    <View style={styles.body}>
      {/* <ImageService/> */}
      <MediaService/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    ...StylesApp.flex1_center,
    backgroundColor: '#c9d6cd',
  }
});