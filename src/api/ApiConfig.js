import axios from 'axios'

const API_LOCAL_URL = axios.create({
  baseURL:import.meta.env.VITE_API_URL  
})          

export default API_LOCAL_URL;