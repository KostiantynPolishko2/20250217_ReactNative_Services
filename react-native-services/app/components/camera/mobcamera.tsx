import React, { FC, useState, useRef } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { CameraType, CameraView} from 'expo-camera';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {StylesApp} from '@/app/styles';

interface IMobCamera {
    size?: { 
        _width: number, 
        _height: number,
    },
    _cameraType?: CameraType,
    _handleCameraPermission: (flag: boolean)=>void,
    _handleSetPhotoUri: (photoUri: string | undefined)=>void,
}

const MobCamera: FC<IMobCamera> = ({_handleCameraPermission, _handleSetPhotoUri,
    size={_width: 250, _height: 200}, _cameraType='front'}) => {

    const [cameraType, setCameraType] = useState<CameraType>(_cameraType);
    const cameraRef = useRef<CameraView | null>(null);

    const captureImage = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            _handleSetPhotoUri(photo?.uri);
        }
    };
 
    return (
        <View>
            <View style={styles.titleTxt}>
                <Text style={styles.rowTxt}>EXPO-CAMERA</Text>
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
                    onPress={()=>{_handleCameraPermission(false)}}
                />
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