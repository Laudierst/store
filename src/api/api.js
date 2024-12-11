import axios from 'axios'

const api = axios.create({
    baseURL: "https://api-pensamdoemmim.onrender.com"
    //baseURL: "https://apinonshops.store"
    //baseURL: "http://35.193.184.30"
    //baseURL: "https://api-store-stylestop.onrender.com" 
    //"http://localhost:3003" 
    //"https://api-store-v4bm.onrender.com"
})

export default api;

export const createSession = async (email, password) => {
    return api.post("/login", { email, password })
}

//Novo github
