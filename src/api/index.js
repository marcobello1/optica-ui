import axios from 'axios'
export const Axiosoptica = axios.create({
baseURL: `${import.meta.env.VITE_API_LINK}`,
    headers: {
         "Access-Control-Allow-Origin":'*'       
    },
}) 