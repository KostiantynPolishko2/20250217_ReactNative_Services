//	Expo Camera
//	https://medium.com/@wsvuefanatic/how-to-save-images-to-supabase-storage-from-expo-camera-react-native-1082fc9444b6
//	https://medium.com/@wsvuefanatic/how-to-integrate-supabase-storage-with-your-react-native-project-2a2966ee712b

//	Expo ImagePicker
//	https://docs.expo.dev/versions/latest/sdk/imagepicker/

import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
 
export default function App() {
    const [permission, setPermission] = useState(null);
 
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setPermission(status === 'granted');
        })();
    }, []);
 
    if (permission === null) {
        return <View />; // Ожидание загрузки разрешений
    }
 
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
 
    return (
        <View>
            <Camera style={{ flex: 1 }} />
        </View>
    );
}