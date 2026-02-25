import axios from "axios"
import { ENV } from "../config/env"

export const http = axios.create({
    baseURL: ENV.API_URL,
    withCredentials:true,
    headers: {"Content-Type":"application/json"}
})