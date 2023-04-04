
import { useDispatch, useSelector } from "react-redux"
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice"
import axios from "axios"
import useAxios from "./useAxios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useStockCall = () => {
const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const {axiosWithToken} =useAxios()
    
  const getStockData = async (url) => {
    // const BASE_URL = "https://12125.fullstack.clarusway.com/"
    dispatch(fetchStart())
 
    try {
    //   const { data } = await axios(`${BASE_URL}stock/${url}/`, {
    //     headers: { Authorization: `Token ${token}` },
    //   })
    const {data} = await axiosWithToken.get(`stock/${url}/`)
      dispatch(getSuccess({ data, url }))
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    }
  }
  const deleteStockData = async (url,id) => {
    // const BASE_URL = "https://12125.fullstack.clarusway.com/"
    dispatch(fetchStart())
 
    try {
        await axiosWithToken.delete(`stock/${url}/${id}/`)
        toastSuccessNotify(`${url} successfuly deleted`)
      
      getStockData(url)
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`${url} can not be deleted`)
    }
  }

  
  const postStockData = async (url, info) => {
    dispatch(fetchStart())
    try {
      await axiosWithToken.post(`stock/${url}/`, info)
      toastSuccessNotify(`${url} successfuly posted`)
      getStockData(url)
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`${url} can not be posted`)
    }
  }

  return {getStockData ,deleteStockData}
}

export default useStockCall
