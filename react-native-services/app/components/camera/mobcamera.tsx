import React, { FC, useState, useRef } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, CameraType, CameraView} from 'expo-camera';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {StylesApp} from '@/app/styles';

interface IMobCamera {
    size?: { 
        _width: number, 
        _height: number,
    },
    _cameraType?: CameraType,
}

const MobCamera: FC<IMobCamera> = ({size={_width: 250, _height: 200}, _cameraType='front'}) => {

    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [permission, setPermission] = useState<Boolean>(false)
    const [cameraType, setCameraType] = useState<CameraType>(_cameraType);
    const cameraRef = useRef<CameraView | null>(null);

    const openPermission = async() => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setPermission(status === 'granted');
    }

    const captureImage = async () => {
        if (cameraRef.current) {
          const photo = await cameraRef.current.takePictureAsync();
          setPhotoUri(photo?.uri? photo.uri: photoUri);
        }
    };

    // activate permission for camera
    if (!permission) {
        return (
            <View>
                <Button 
                    title="camera"
                    color='#4e585f'
                    onPress={openPermission}
                />
            </View>
        );
    }
 
    // final presence activated camera
    return (
        <View>
            <View style={styles.titleTxt}>
                <Text style={styles.rowTxt}>expo-camera</Text>
            </View>
            <CameraView 
                ref={cameraRef}
                facing={cameraType}
                style={{width: size?._width, height: size?._height}}
            />
            <View style={StylesApp.flex_row}>
                <Button 
                    title='flip'
                    color='#7fadc9'
                    onPress={() => setCameraType(prev => prev === 'front'? 'back' : 'front')}
                />
                <TouchableOpacity style={styles.bodyTxt} onPress={captureImage}>
                    <MaterialCommunityIcons name='camera' size={34} color='#cfd8dd'/>
                </TouchableOpacity>
                <Button
                    title='close'
                    color='#d6423d'
                    onPress={()=>{setPermission(false)}}
                />
            </View>
            <View style={[StylesApp.flex_row, {justifyContent: 'center'}]}>
                {photoUri && <Image source={{uri: photoUri}} style={styles.previewPhoto}/>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bodyTxt: {
        ...StylesApp.flex1_center,
        backgroundColor: '#737b83',
        borderColor: 'darkgrey',
        borderWidth: 1, 
    },
    rowTxt: {
        color: 'whitesmoke',
        textAlign: 'center',
        flex: 1,
        lineHeight:33,
    },
    titleTxt: {
        ...StylesApp.flex_row,
        backgroundColor: '#737b83',
        borderColor: 'darkgrey',
        borderWidth: 1,
    },
    previewPhoto:{
        width: 100, height: 100, margin: 5,
    }
});

export default MobCamera;