import { Camera } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { supabase } from "./supabaseClient.js";

export default function MyCamera() {
  // const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);

  // Camera permissions are still loading
  if (!camera) {
    return <View />;
  }

  // Camera permissions are not granted yet
  // if (!permission.granted) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
  //       <Button onPress={requestPermission} title="grant permission" />
  //     </View>
  //   );
  // }

  // handle capturing of images
  // const captureImage = async () => {
  //   if (permission.granted) {
  //     const photo = await camera.takePictureAsync({ base64: true });
  //     console.log('camera photo', photo);
  //   }
  // }

  // return (
  //   <View style={styles.container}>
  //     <Camera 
  //       style={styles.camera} 
  //       ref={ref => {
  //         setCamera(ref);
  //       }}
  //     >
  //       <View style={styles.buttonContainer}>
  //         <TouchableOpacity style={styles.button} onPress={captureImage}>
  //           <MaterialCommunityIcons name="camera" size={36} color="black" />
  //         </TouchableOpacity>
  //       </View>
  //     </Camera>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    margin: 32,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});