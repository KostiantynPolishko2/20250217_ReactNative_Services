import React, { FC, useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { StylesApp } from '@/app/styles';

const MobImagePicker:FC = () => {
  const [image, setImage] = useState<string | undefined>(undefined);

  const pickImageGallery = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });
  };

  const pickImageCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      cameraType: ImagePicker.CameraType.front,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled){
      setImage(result.assets[0].uri);
      console.log('picked image uri', image);
    }
  }

  const saveImageToGallery = async (imageUri: string | undefined) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();

    if (status === 'granted'){
      if(imageUri === undefined){
        return;
      }
      await MediaLibrary.saveToLibraryAsync(imageUri);
    }
    else{
      console.log('permission is danied for saving to gallery');
    }
  }

  return (
    <View style={styles.container}>
      <View style={StylesApp.flex_row}>
        <Button title="image gallery" onPress={pickImageGallery} />
        <Button title="image camera" onPress={pickImageCamera} />
        <Button title="save" onPress={()=>{saveImageToGallery(image)}} />
        <Button title="reset" onPress={()=>{console.log('call reset image')}} />
      </View>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default MobImagePicker;