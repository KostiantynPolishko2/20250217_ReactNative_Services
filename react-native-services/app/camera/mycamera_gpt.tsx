import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text } from 'react-native';
import { Camera, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
 
export default function MyCamera() {

    const [permission, setPermission] = useState<boolean | null>(null)
    // const [permission, requestPermission] = useCameraPermissions();
    // const [cameraType, setCameraType] = useState<CameraType>(CameraType.back);
    const cameraRef = useRef<CameraView | null>(null);
 
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setPermission(status === 'granted');
        })();
    }, []);
 
    // wait for loading permissions
    if (permission === null) {
        return <View><Text>not yet loaded camera</Text></View>;
    }
 
    // activate permission for camera
    if (!permission) {
        return (
            <View>
                <Text>We need your permission to show the camera</Text>
                <Button onPress={async () => {
                    const { status } = await Camera.requestCameraPermissionsAsync();
                    setPermission(status === 'granted');
                }} title="Grant Permission" />
            </View>
        );
    }
 
    // final presence activated camera
    return (
        <View>
            <CameraView 
                ref={cameraRef}
                facing='front'
                style={{ flex: 1, width: 100, height: 100}}
            />
        </View>
    );
}