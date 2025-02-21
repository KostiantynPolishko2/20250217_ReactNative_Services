import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ServiceStyles from '@/app/components/services/service-styles';
import defaultImage from '@/assets/images/default.png';
import {saveImageToGallery} from './service-utils';
import { requestPermissionsAsync as galleryPermission } from 'expo-media-library';

interface IImageService {
    _photoUri: string | undefined,
    _resetPhotoUri: () => void,
    closeImageService: (flag: boolean)=>void,
}

const ImageService: FC<IImageService> = ({_photoUri, _resetPhotoUri, closeImageService}) => {

    const handleSaveImage = async () => {
        const { status } = await galleryPermission();
        if (status !== 'granted'){
            _resetPhotoUri();
            alert('danied access to gallery');
        }
        else if (await saveImageToGallery(_photoUri)){
            _resetPhotoUri();
            alert('image was saved');
        }
        else{
            alert('image was not saved');
        }
    }

    return(
        <View style={ServiceStyles.body}>
            <Text style={ServiceStyles.titeTxt}>IMAGE SERVICE</Text>
            <Image source={_photoUri? {uri: _photoUri} : defaultImage} style={ServiceStyles.image}/>
            <View style={ServiceStyles.bodyBtn}>
                <MaterialCommunityIcons name='image-edit' style={[ServiceStyles.btn, {color: '#40abf3'}]}/>
                <MaterialCommunityIcons name='image-plus' style={[ServiceStyles.btn, {color: '#3ca12e'}]} onPress={handleSaveImage}/>
                <MaterialCommunityIcons name='close-box' style={[ServiceStyles.btn, {color: '#d61717'}]} onPress={()=>{closeImageService(false);}}/>
            </View>
        </View>
    );
}

export default ImageService;