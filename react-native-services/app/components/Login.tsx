import React, { FC, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import useAxiosAdmin from "../hooks/useAxiosAdmin";

type TLoginData = {
    username: string,
    password: string,
}

const Login: FC = () => {

    const _baseURL = 'http://localhost:5185/api/Authenticate';
    let {response, error, loading, treatData} = useAxiosAdmin(_baseURL);

    const loginData:TLoginData = {username: 'polxs_wp31', password: 'n20ri2J9!'}

    // fetch token auth
    const getAuthToken = () => {
        treatData({
            url: 'login',
            method: 'POST',
            data: loginData,
        });
    }

    useEffect(()=>{
        if(response)
            localStorage.setItem('token', response);
        response = undefined;

    }, [response]);

    return(
        <View>
            <Text>auth token</Text>
            <Button title="Login" onPress={getAuthToken}/>
            {loading && <Text>...loading</Text>}
        </View>
    );
};

export default Login;