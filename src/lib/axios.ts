import axios from "axios"

export const api = axios.create({
    baseURL: "users.json",
    withCredentials:true,
    headers: {
        "Content-Type":"application/json"
    }
})