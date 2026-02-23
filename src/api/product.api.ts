import { ENV } from "../config/env"

const BASE_URL = `${ENV.API_URL}/posts`

export async function getProducts() {
    const res = await fetch(BASE_URL, {
        method: "GET"
    })
    return res.json()
}

export async function createProduct(payload: any) {
    const res = await fetch(BASE_URL,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    })
    return res.json()
}

export async function updateProduct(id:number,payload:any){
    const res = await fetch(BASE_URL+`/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({id,payload})
    })
    return res.json()
}

export async function deleteProduct(id:number){
    const res = await fetch(BASE_URL+`/${id}`,{
        method:"DELETE"
    })
    return res.json()
}
