import axios from "axios"


const axiosClinet=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
   
})


axiosClinet.interceptors.request.use((config)=>{
    config.headers.Authorization=`Bearer ${localStorage.getItem("ACCESS_TOKEN")} `
    return config;
})

export default axiosClinet;