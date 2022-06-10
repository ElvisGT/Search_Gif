import {useState,useEffect} from 'react';
import axios from 'axios';

const useApi = (API) => {
    const [imgs, setImgs] = useState([]);
    const config = {
      'header':{
      'Access-Control-Allow-Headers':'*'
      }
    }

    useEffect(() => {
      const fetchingData = async () => {
        const response = await axios.get(API,config);
        setImgs(response.data);
      };

      fetchingData();
    
    }, [API])
    

    
    return{
        imgs
    };
};


export default useApi;