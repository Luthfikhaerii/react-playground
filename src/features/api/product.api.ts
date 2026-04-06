import { ENV } from "../../config/env"
import { api } from "../../lib/axios"

const BASE_URL = `${ENV.API_URL}/posts`

export async function getProducts() {
    const res = await api.get(BASE_URL, {
        params: {
            page: 1,
            limit: 10
        }
    })
    return res.data
}

export async function createProduct(payload: any) {
    const res = await api.post(BASE_URL, {
        body: payload
    })
    return res.data
}

export async function updateProduct(id: number, payload: any) {
    const res = await api.put(BASE_URL + `/${id}`, {
        body: payload
    })
    return res.data
}

export async function deleteProduct(id: number) {
    const res = await api.delete(BASE_URL + `/${id}`)
    return res.data
}
