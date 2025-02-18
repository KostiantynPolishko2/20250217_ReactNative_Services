import React, { FC, useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera, CameraType, CameraView} from 'expo-camera';
import { StylesApp } from '@/app/styles';

interface IMobCamera {
    size?: { 
        _width: number, 
        _height: number,
    },
    _cameraType?: CameraType,
}

const MobCamera: FC<IMobCamera> = ({size={_width: 250, _height: 150}, _cameraType='front'}) => {

    const [permission, setPermission] = useState<Boolean>(false)
    const [cameraType, setCameraType] = useState<CameraType>(_cameraType);
    const cameraRef = useRef<CameraView | null>(null);

    const openPermission = async() => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setPermission(status === 'granted');
    }

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
                <View style={styles.bodyTxt}>
                    <Text style={styles.rowTxt}>OPTION</Text>
                </View>
                <Button
                    title='close'
                    color='#d6423d'
                    onPress={()=>{setPermission(false)}}
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
    }
});

export default MobCamera;