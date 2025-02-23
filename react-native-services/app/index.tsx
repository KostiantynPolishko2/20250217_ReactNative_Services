import { View, StyleSheet } from "react-native";
import { StylesApp } from "./styles";
import PhoneContacts from "./components/contacts/phone-contacts";
import SimpleSectionList from "./components/test/test-fc-sectionlist";

export default function Index() {
  return (
    <View style={styles.body}>
      {/* <PhoneContacts/> */}
      <SimpleSectionList/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    ...StylesApp.flex1_center,
    backgroundColor: '#c9d6cd',
  }
});