import React, { FC, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Camera } from 'expo-camera';
import ServiceStyles from '@/app/components/services/service-styles';
import profileImage from '@/assets/images/profile.png';
import MobCamera from '../camera/mobcamera';
import ImageService from './image-service';
import { pickImageFromGallery } from './service-utils';
import { getMediaLibraryPermissionsAsync as imagePickerGetMediaLibPermissionAsync} from 'expo-image-picker';

const MediaService: FC = () => {

    const [cameraPermission, setCameraPermission] = useState<boolean>(false)
    const [isImageService, setIsImageService] = useState<boolean>(false);
    const [photoUri, setPhotoUri] = useState<string | undefined>(undefined);

    const imageDefault = <Image source={profileImage} alt='image' style={ServiceStyles.image}/>;

    const resetPhotUri = () => {
        setIsImageService(!isImageService);
        setPhotoUri(undefined);
    }

    const imagePhoto = 
        <TouchableOpacity onPress={()=>{setIsImageService(!isImageService);}}>
            <Image source={{uri: photoUri}} alt='image' style={ServiceStyles.image}/>
        </TouchableOpacity>;

    const getCameraPermission = async() => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setCameraPermission(status === 'granted');
    }

    const handleCameraPermission = (isPermission: boolean) => {
        setCameraPermission(isPermission);
    }

    const handleSetPhotoUri = (_photoUri: string | undefined) => {
        setPhotoUri(_photoUri? _photoUri: undefined);
        setCameraPermission(false);
    }

    const handleImageFromGallery = async() => {
        const { status } = await imagePickerGetMediaLibPermissionAsync(false);
        if (status !== 'granted'){
            setPhotoUri(photoUri);
            alert('danied access to gallery');
        }
        else{
            setPhotoUri(await pickImageFromGallery() || photoUri);
        }
    }

    if(cameraPermission){
        return <MobCamera _handleCameraPermission={handleCameraPermission} _handleSetPhotoUri={handleSetPhotoUri}/>
    }

    if(isImageService){
        return <ImageService _photoUri={photoUri} _resetPhotoUri={resetPhotUri}/>
    }

    return(
        <View style={ServiceStyles.body}>
            <Text style={ServiceStyles.titeTxt}>MEDIA SERVICE</Text>
            {photoUri? imagePhoto : imageDefault}
            <View style={ServiceStyles.bodyBtn}>
                <MaterialCommunityIcons name='video-image' style={[ServiceStyles.btn, {color: '#40abf3'}]} onPress={getCameraPermission} />
                <MaterialCommunityIcons name='view-gallery' style={[ServiceStyles.btn, {color: '#3ca12e'}]} onPress={handleImageFromGallery}/>
                <MaterialCommunityIcons name='share' style={[ServiceStyles.btn, {color: '#f38240'}]}/>
            </View>
        </View>
    );
}

export default MediaService;