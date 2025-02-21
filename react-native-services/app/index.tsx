import { Text, View, StyleSheet } from "react-native";
import { StylesApp } from "./styles";
import LoadContacts from "./components/contacts/load-contacts";

export default function Index() {
  return (
    <View style={styles.body}>
      <LoadContacts/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    ...StylesApp.flex1_center,
    backgroundColor: '#c9d6cd',
  }
});