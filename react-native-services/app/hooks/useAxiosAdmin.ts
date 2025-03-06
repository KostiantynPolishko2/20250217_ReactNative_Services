import axios from 'axios'
import { useState } from 'react';

const useAxiosAdmin = () => {
    const [response, setResponse] = useState<any | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const axiosInstance = axios.create({
        baseURL: 'http://adminpageserverpl2-dev.eba-pahpkfjc.eu-west-3.elasticbeanstalk.com/api/WeaponsItems',
    });

    const treatData = async(item:{url: string, method: string}):Promise<void> => {
        setLoading(true);

        try{
            const result = await axiosInstance({
                url: item.url,
                method: item.method,             
            });

            setResponse(result.data);
        } 
        catch(error){
            setError('undefined error');
        } 
        finally {
            setLoading(false);
        }
    }

    return {response, error, loading, treatData}
}

export default useAxiosAdmin;