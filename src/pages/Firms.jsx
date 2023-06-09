import { Button, Grid, Typography } from "@mui/material"
import axios from "axios"
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice"
import useStockCall from "../hooks/useStockCall"
import FirmCard from "../components/FirmCard"
import FirmModal from "../components/modals/FirmModal"


const Firms = () => {
  const {getStockData} =useStockCall()
  const {firms} = useSelector((state)=>state.stock)
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name:"",
    phone:"",
    address:"",
    image:"",})
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const { token } = useSelector((state) => state.auth)
  // const dispatch = useDispatch()

  // const getFirms = async () => {
  //   const BASE_URL = "https://12125.fullstack.clarusway.com/"
  //   dispatch(fetchStart())
  //   const url = "firms"
  //   try {
  //     const { data } = await axios(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     })
  //     dispatch(getSuccess({ data, url }))
  //   } catch (error) {
  //     console.log(error)
  //     dispatch(fetchFail())
  //   }
  // }

  useEffect(() => {
    
  // getFirms()
  getStockData("firms")
    
  }, [])
  
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Firm</Button>

      <FirmModal open={open} handleClose={handleClose} info={info} setInfo={setInfo}/>
<Grid container  >
  {firms?.map((firm)=>(
    <Grid item key={firm.id}>
      <FirmCard firm={firm} setOpen={setOpen} info={info} setInfo={setInfo}/>

    </Grid>
  ))}

</Grid>

    </div>
  )
}

export default Firms
