import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

export const saveImageToGallery = async (photoUri: string | undefined):Promise<boolean> => {

    if(photoUri === undefined)
        return false;

    // const { status } = await MediaLibrary.requestPermissionsAsync();
    // if (status !== 'granted')
    //     return false;

    try{
        await MediaLibrary.saveToLibraryAsync(photoUri);
        return true;
    }
    catch (error){
        return false;
    }

}

// before as option make request to get persmission for access to gallery
export const pickImageFromGallery = async ():Promise<string | undefined> => {

    try{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [3, 3],
            quality: 0.5,
        });
    
        return !result.canceled? result.assets[0].uri : undefined;
    }
    catch{
        return undefined;
    }

};

// before as option make request to get persmission for access to camera
export const pickImageCamera = async ():Promise<string | undefined> => {

    try{
        let result = await ImagePicker.launchCameraAsync({
            cameraType: ImagePicker.CameraType.front,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        return !result.canceled? result.assets[0].uri : undefined;
    }
    catch{
        return undefined;
    }
    
}