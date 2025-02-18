import React, { useEffect, useRef, useState } from "react";
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
 
export default function MyCamera() {
  const cameraRef = useRef<CameraType | null>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.back);
  const [permission, setPermission] = useState<boolean | null>(null);
 
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === "granted");
    })();
  }, []);
 
  if (permission === null) return <View><Text>not yet loaded camera!</Text></View>;

  if (!permission) {
    return (
      <View style={styles.container}>
        <Button
          title="Разрешить доступ к камере"
          onPress={async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setPermission(status === "granted");
          }}
        />
      </View>
    );
  }
 
  const captureImage = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };
 
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={(ref) => (cameraRef.current = ref as CameraType)}
        type={cameraType}
      />
      <TouchableOpacity style={styles.button} onPress={captureImage}>
        <MaterialCommunityIcons name="camera" size={36} color="black" />
      </TouchableOpacity>
      {photoUri && <Image source={{ uri: photoUri }} style={styles.preview} />}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  camera: { width: "100%", height: 400 },
  preview: { width: 200, height: 200, margin: 10 },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
});
 