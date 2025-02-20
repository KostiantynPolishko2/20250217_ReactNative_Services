import * as MediaLibrary from 'expo-media-library';

const saveImageToGallery = async (photoUri: string | undefined):Promise<boolean> => {

    if(photoUri === undefined)
        return false;

    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted')
        return false;

    try{
        await MediaLibrary.saveToLibraryAsync(photoUri);
        return true;
    }
    catch (error){
        return false;
    }

}

export default saveImageToGallery;