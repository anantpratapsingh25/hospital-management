import axios from "axios";
const instance = axios.create({
    baseURL: "https://hospital-management-k1xl.onrender.com/api",
    withCredentials:true,
});

export default instance;
