import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ServiceStyles from '@/app/components/services/service';
import defaultImage from '@/assets/images/default.png';

interface IImageService {
    _handleIsImageService: ()=>void,
}

const ImageService: FC<IImageService> = ({_handleIsImageService}) => {

    return(
        <View style={ServiceStyles.body}>
            <Text style={ServiceStyles.titeTxt}>IMAGE SERVICE</Text>
            <Image source={defaultImage} alt='image' style={ServiceStyles.image}/>
            <View style={ServiceStyles.bodyBtn}>
                <MaterialCommunityIcons name='image-edit' style={[ServiceStyles.btn, {color: '#40abf3'}]}/>
                <MaterialCommunityIcons name='image-plus' style={[ServiceStyles.btn, {color: '#3ca12e'}]}/>
                <MaterialCommunityIcons name='image-remove' style={[ServiceStyles.btn, {color: '#f38240'}]} onPress={_handleIsImageService}/>
            </View>
        </View>
    );
}

export default ImageService;