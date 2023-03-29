import axios from axios;

const login = async()=>{

    try {
         const {data} = await axios.post(url,veri)
    } catch (error) {
        console.log(error)
    }

  
}