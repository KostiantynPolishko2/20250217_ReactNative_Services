import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {

  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
      <Button title="Go to Client" onPress={() => router.push('/components/client')} />
      <Button title="Go to Seller" onPress={() => router.push('/components/seller')} />
    </View>
  );
}
