import axios from 'axios'
import { useState, useEffect } from 'react';
import { getToken } from '../utils/token';

const useAxiosAdmin = (_baseURL: string) => {
    const [response, setResponse] = useState<any | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const axiosInstance = axios.create({
        baseURL: _baseURL,
    });

    let controller = new AbortController();

    // to abort axios request when parent component is unmounted
    useEffect(()=>{
        return () => controller?.abort();
    }, []);

    const treatData = async(item:{url: string, method: string, data:any}):Promise<void> => {
        
        setLoading(true);
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${await getToken() || ''}`;

        controller.abort();
        controller = new AbortController();

        // set up a timeout to abort the request after 10 seconds
        const timeoutId = setTimeout(()=>{
            controller.abort();
        }, 5000); // 5 seconds
        
        try{
            
            const result = await axiosInstance({
                url: item.url,
                method: item.method,
                data: item.data,
                signal: controller.signal,
                
            });

            clearTimeout(timeoutId); // clear timeout if request completes
            setResponse(result.data);
            console.log('result', result.data);
        } 
        catch(error){
            clearTimeout(timeoutId); // ensure timeout is cleared in case of an error

            if(axios.isCancel(error)){
                setError('axios request was aborted!');
            }
            else{
                setError('undefined error');
            }
        } 
        finally {
            setLoading(false);
        }
    }

    return {response, error, loading, treatData}
}

export default useAxiosAdmin;