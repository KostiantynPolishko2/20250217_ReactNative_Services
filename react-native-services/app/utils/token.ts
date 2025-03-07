import * as SecureStore from 'expo-secure-store';

export const saveToken = async (token: string):Promise<boolean> => {
    try {
        await SecureStore.setItemAsync('token', token, {
            keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY
        });

        return true;
    }
    catch(error){
        console.log('error', error);
        return false;
    };
};

export const getToken = async ():Promise<string | null> => {
    try{
        return await SecureStore.getItemAsync('token');
    }
    catch(error){
        console.log('error', error);
        return null;
    }
};