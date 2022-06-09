import {useState,useEffect} from 'react';
import axios from 'axios';

const useApi = (API) => {
    const [imgs, setImgs] = useState([]);

    useEffect(() => {
      const fetchingData = async () => {
        const response = await axios.get(API);
        console.log(response.data);
        setImgs(response.data);
      };

      fetchingData();
    
    }, [API])
    
    
    return{
        imgs
    };
};


export default useApi;