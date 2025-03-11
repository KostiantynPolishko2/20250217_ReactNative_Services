import * as SecureStore from 'expo-secure-store';

const useTokenStorage = (key: string) => {

    const saveValue = async (value: string):Promise<boolean> => {
        try {
            await SecureStore.setItemAsync(key, value, {
                keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY
            });
    
            return true;
        } catch(error){
            console.log('save error', error);
            return false;
        };
    };
    
    const getValue = async ():Promise<string | null> => {
        try{
            return await SecureStore.getItemAsync(key);
        } catch(error){
            console.log('get error', error);
            return null;
        }
    };

    const removeValue = async ():Promise<boolean> => {
        try{
            await SecureStore.deleteItemAsync(key);
            return true
        } catch(error){
            console.log('get error', error);
            return false;
        }
    };

    return {saveValue, getValue, removeValue};
}

export default useTokenStorage;