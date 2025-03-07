import { useState, useEffect } from "react";
import useAxiosAdmin from "../hooks/useAxiosAdmin";
import useTokenStorage from "../hooks/useTokenStorage";

const useWeaponsModelDelete = (_baseURL: string) => {
    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const {saveValue, getValue, removeValue} = useTokenStorage('jwt');
    const [isDelete, setIsDelete] = useState<boolean>(false);

    // fetch weapons models
    const deleteWeaponsModel = async (model: string) => {
        treatData({
            route: `model/${model}`,
            method: 'DELETE',
            data:  {},
            jwt: await getValue()
        });
        console.log('delete model', response || error);
    }

    useEffect(()=>{
        if(typeof response === 'number')
            setIsDelete(response === 201);
    }, [response]);

    return {isDelete, loading, deleteWeaponsModel}
}

export default useWeaponsModelDelete;