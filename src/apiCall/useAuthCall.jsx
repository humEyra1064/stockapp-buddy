import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchStart } from "../features/authSlice";

export const login = async(userInfo)=>{
    const BASE_URL = "https://12125.fullstack.clarusway.com/"
    const dispatch = useDispatch()
   dispatch(fetchStart())
    try {
         const {data} = await axios.post(`${BASE_URL}account/auth/login/`,userInfo)
         console.log(data)
         return data
    } catch (error) {
        console.log(error)
    }

  
}