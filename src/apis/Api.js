import axios from "axios";

const api = axios.create({
    baseURL :'https://e-commerce-data.onrender.com'
})


export const fetchData = async (data,setData)=> {
   return await api.get(data).then(res=> {
    setData(res?.data)
   }) 
}




