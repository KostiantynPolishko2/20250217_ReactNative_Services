import { useState, useEffect } from "react";
import useAxiosAdmin from "./useAxiosAdmin";
import useTokenStorage from "./useTokenStorage";

const useDeleteWeaponsModel = (_baseURL: string) => {
    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const {saveValue, getValue, removeValue} = useTokenStorage('jwt');
    const [isRemove, setIsRemove] = useState<boolean>(false);

    // dekete weapons models
    const remove = async (model: string) => {
        treatData({
            route: `model/${model}`,
            method: 'DELETE',
            data:  {},
            jwt: await getValue()
        });
        console.log('remove model', response || error);
    }

    useEffect(()=>{
        if(typeof response === 'number')
            setIsRemove(response === 201);
    }, [response]);

    return {isRemove, loading, remove};
}

export default useDeleteWeaponsModel;