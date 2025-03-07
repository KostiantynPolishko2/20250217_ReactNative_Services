import React, { FC, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import useAxiosAdmin from "../hooks/useAxiosAdmin";
import useTokenStorage from "../hooks/useTokenStorage";


const WeaponsDelete: FC = () => {

    const _baseURL = 'http://adminpageserverpl2-dev.eba-pahpkfjc.eu-west-3.elasticbeanstalk.com/api/WeaponsItems';

    const {response, error, loading, treatData} = useAxiosAdmin(_baseURL);
    const {saveValue, getValue, removeValue} = useTokenStorage('jwt');
    const [deleteModel, setDeleteModel] = useState<boolean>(false);

    const model:string = 'item_model1';


    // fetch weapons models
    const deleteWeaponsModel = async () => {
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
            setDeleteModel(response === 201);
    }, [response]);

    return (
        <View>
            <Text>auth: weapons post new model</Text>
            <Button title="DeleteModel" onPress={deleteWeaponsModel}/>
            {deleteModel && <Text>deleted: {model}</Text>}
            {loading && <Text>...processing</Text>}
        </View>
    );
};

export default WeaponsDelete;