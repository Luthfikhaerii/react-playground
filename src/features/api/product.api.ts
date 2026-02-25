import { ENV } from "../../config/env"
import { http } from "../../lib/axios"

const BASE_URL = `${ENV.API_URL}/posts`

export async function getProducts() {
    const res = await http.get(BASE_URL, {
        params: {
            page: 1,
            limit: 10
        }
    })
    return res.data
}

export async function createProduct(payload: any) {
    const res = await http.post(BASE_URL, {
        body: payload
    })
    return res.data
}

export async function updateProduct(id: number, payload: any) {
    const res = await http.put(BASE_URL + `/${id}`, {
        body: payload
    })
    return res.data
}

export async function deleteProduct(id: number) {
    const res = await http.delete(BASE_URL + `/${id}`)
    return res.data
}
